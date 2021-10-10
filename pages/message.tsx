import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Box, Container, Element, Section } from "react-bulma-components";

import { listImages } from "../lib/listImages";
import ImagesContext from "../lib/ImagesContext";
import { PublicMessageEntry } from "../lib/PublicMessageEntry";

import { Layout } from "../components/Layout";
import { PublicMessage } from "../components/message/PublicMessage";
import { BuildTimeBlock } from "../components/BuildTimeBlock";

interface IProps {
  buildTime: number;
  images: string[];
  entries: PublicMessageEntry[];
}

const Message: NextPage<IProps> = ({ buildTime, images, entries }) => {
  return (
    <ImagesContext.Provider value={images}>
      <Layout
        title="生前に親交のあった方々からのメッセージ"
        header="メッセージ"
        description="生前に親交のあった方々から先生への、お別れのメッセージです。"
        path="message"
      >
        <Container>
          <Section>
            <p>
              生前に親交のあった方々から先生への、お別れのメッセージです。ゼミ生からのメッセージは
              <Link href="/seminar/message" passHref>
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
                entries.map((e, i) => <PublicMessage key={i} message={e} />)
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
  let entries: PublicMessageEntry[] = [];
  if (typeof process.env.GAS_DEPLOY_PUBLIC_ID === "string") {
    try {
      // fetch data
      const url = `https://script.google.com/macros/s/${process.env.GAS_DEPLOY_PUBLIC_ID}/exec`;
      const res = await fetch(url);
      const data = await res.json();

      // organize data
      entries = data.map((e: any) => {
        return {
          name: e["氏名"],
          body:
            e[
              Object.keys(e).find((key) => key.indexOf("メッセージ") >= 0) ||
                "メッセージ"
            ] || null,
          affiliation: e["所属など"],
          postfix: e["追記"],
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
