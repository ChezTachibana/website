import { GetStaticProps, NextPage } from "next";
import Link_ from "next/link";
import {
  Box,
  Container,
  Heading,
  Message,
  Section,
} from "react-bulma-components";

import { listImages } from "../lib/listImages";
import ImagesContext from "../lib/ImagesContext";

import { Layout } from "../components/Layout";
import { Paragraph } from "../components/Paragraph";

interface IProps {
  images: string[];
}

const Link: NextPage<IProps> = ({ images }) => {
  return (
    <ImagesContext.Provider value={images}>
      <Layout
        header="リンク"
        description="立花隆に関係するWebサイトのアーカイブへのリンク集です。"
        path="link"
      >
        <Container>
          <Section>
            <p>
              立花隆に関係するWebサイトのアーカイブへのリンク集です。
              <Link_ href="/seminar">
                <a>立花隆ゼミについてはこちら</a>
              </Link_>
              。
            </p>
          </Section>
          <Section>
            <Box id="chez">
              <Heading>
                <a href="https://web.archive.org/web/20160610175634/http://chez.tachibanaseminar.org/">
                  シェ・タチバナ 立花隆公式サイト
                </a>
              </Heading>
              <Heading subtitle>
                <a href="https://web.archive.org/web/20160610175634/http://chez.tachibanaseminar.org/">
                  http://chez.tachibanaseminar.org
                </a>
              </Heading>
              <p>
                2016年にドメインが失効するまでメンテナンスされていたサイト（リンク先は
                Internet Archive）
              </p>
            </Box>
            <Box id="cyu">
              <Heading>
                <a href="https://cyu.digitalmuseum.jp">
                  立花隆ゼミ『調べて書く、発信する』 Cyber University
                </a>
              </Heading>
              <Heading subtitle>
                <a href="https://cyu.digitalmuseum.jp">
                  https://cyu.digitalmuseum.jp
                </a>
              </Heading>
              <p>東京大学立花隆ゼミ（第一期：1996年～1998年）</p>
              <Paragraph>
                Internet Archive上の旧サイト:{" "}
                <a href="https://web.archive.org/web/20061205015914/http://matsuda.c.u-tokyo.ac.jp:80/~ctakasi">
                  http://matsuda.c.u-tokyo.ac.jp/~ctakasi
                </a>
              </Paragraph>
            </Box>
            <Box id="sci">
              <Heading>
                <a href="https://sci.digitalmuseum.jp">
                  SCI（サイ）─サイエンスの、最先端を。
                </a>
              </Heading>
              <Heading subtitle>
                <a href="https://sci.digitalmuseum.jp">
                  https://sci.digitalmuseum.jp
                </a>
              </Heading>
              <p>東京大学立花隆ゼミ（第二期：2005年～2007年）</p>
              <Paragraph>
                ※旧サイトURL: <code>http://sci.gr.jp</code>
              </Paragraph>
            </Box>
            <Box id="kenbunden">
              <Heading>
                <a href="http://kenbunden.net/general">
                  見聞伝─見たい、聞きたい、伝えたい
                </a>
              </Heading>
              <Heading subtitle>
                <a href="http://kenbunden.net/general">
                  http://kenbunden.net/general
                </a>
              </Heading>
              <p>東京大学立花隆ゼミ（第三期：2007年～2009年）</p>
              <Paragraph>
                ※立花の東大退官に伴い、2009年～2016年頃まで東京大学見聞伝ゼミナールとして活動
              </Paragraph>
            </Box>
            <Box id="rikkyo">
              <Heading>
                <a href="https://tsemi.digitalmuseum.jp">
                  立教立花組 乱歩通り６号館 ネコ屋敷
                </a>
              </Heading>
              <Heading subtitle>
                <a href="https://tsemi.digitalmuseum.jp">
                  https://tsemi.digitalmuseum.jp
                </a>
              </Heading>
              <p>立教大学大学院21世紀社会デザイン研究科 立花ゼミ</p>
              <Paragraph>
                ※旧サイトURL: <code>http://tachibanaseminar.org</code>
              </Paragraph>
            </Box>
            <Box id="koneko">
              <Heading>
                <a href="https://koneko.digitalmuseum.jp">こねこカフェ</a>
              </Heading>
              <Heading subtitle>
                <a href="https://koneko.digitalmuseum.jp">
                  https://koneko.digitalmuseum.jp
                </a>
              </Heading>
              <p>
                立教大学全学共通カリキュラム講義「大学と現代社会」立花隆ゼミ
              </p>
              <Paragraph>
                ※旧サイトURL: <code>http://koneko.tachibanaseminar.org</code>
              </Paragraph>
            </Box>
          </Section>
          <Section id="contact">
            <Message>
              <Message.Body>
                <p>
                  <code>digitalmuseum.jp</code>{" "}
                  のサブドメインでアーカイブされている各サイトは、第二期ゼミ生の
                  <a href="https://junkato.jp/ja">加藤</a>
                  が管理しています。ご用の方は
                  <a href="https://junkato.jp/ja#contact">直接ご連絡</a>
                  ください。
                </p>
              </Message.Body>
            </Message>
          </Section>
        </Container>
      </Layout>
    </ImagesContext.Provider>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  try {
    return {
      props: {
        images: await listImages(),
      },
    };
  } catch (_) {
    return {
      props: {
        images: [],
      },
    };
  }
};

export default Link;
