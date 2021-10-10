import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Box, Container, Section } from "react-bulma-components";

import { listImages } from "../../lib/listImages";
import ImagesContext from "../../lib/ImagesContext";
import { MessageEntry } from "../../lib/MessageEntry";

import { Layout } from "../../components/Layout";
import { MyMessage } from "../../components/message/MyMessage";
import { BuildTimeBlock } from "../../components/BuildTimeBlock";

interface IProps {
  buildTime: number;
  images: string[];
  entries: MessageEntry[];
}

const Message: NextPage<IProps> = ({ buildTime, images, entries }) => {
  return (
    <ImagesContext.Provider value={images}>
      <Layout
        title="ゼミ生からのメッセージ"
        header="メッセージ"
        description="立花ゼミ生から先生へのメッセージです。"
        path="seminar/message"
      >
        <Container>
          <Section>
            <p>
              立花ゼミ生から先生へのメッセージです。生前に親交のあった方々からのメッセージは
              <Link href="/message" passHref>
                <a>こちら</a>
              </Link>
              です。
            </p>
          </Section>
          <Section>
            <Box>
              {!entries || entries.length <= 0 ? (
                <p>まだメッセージが投稿されていません。</p>
              ) : (
                entries.map((e, i) => <MyMessage key={i} message={e} />)
              )}
              <BuildTimeBlock buildTime={buildTime} />
            </Box>
          </Section>
        </Container>
      </Layout>
    </ImagesContext.Provider>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  let entries: MessageEntry[] = [];
  if (typeof process.env.GAS_DEPLOY_SEMINAR_ID === "string") {
    try {
      // fetch data
      const url = `https://script.google.com/macros/s/${process.env.GAS_DEPLOY_SEMINAR_ID}/exec`;
      const res = await fetch(url);
      const data = await res.json();

      // organize data
      entries = data.map((e: any) => {
        return {
          name: e["氏名"],
          title: e["タイトル"] || null,
          affiliation:
            e[
              Object.keys(e).find(
                (key) =>
                  key.indexOf("参加していた") >= 0 || key.indexOf("ゼミ") >= 0
              ) || "あなたが参加していたゼミを選んでください。"
            ],
          body:
            e[
              Object.keys(e).find(
                (key) =>
                  key.indexOf("メッセージ") >= 0 ||
                  key.indexOf("思い出") >= 0 ||
                  key.indexOf("エピソード") >= 0
              ) ||
                "あなたと立花先生との思い出や、立花先生の人物像がわかるエピソード等を記入してください。（本文中に氏名の記載は不要です）"
            ] || null,
        };
      });
      entries.reverse();
    } catch (_) {
      // do nothing
    }
  }
  try {
    return {
      props: {
        buildTime: Date.now(),
        images: await listImages(),
        entries,
      },
    };
  } catch (_) {
    return {
      props: {
        buildTime: Date.now(),
        images: [],
        entries,
      },
    };
  }
};

export default Message;
