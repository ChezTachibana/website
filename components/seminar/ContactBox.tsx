import { FC, useContext } from "react";
import { Box, Heading } from "react-bulma-components";

import LanguageContext from "../../lib/LanguageContext";

import { Paragraph } from "../Paragraph";

export const ContactBox: FC = () => {
  const lang = useContext(LanguageContext);

  return (
    <Box id="contact">
      <Heading>{lang == "ja" ? "お問い合わせ" : "Contact"}</Heading>
      {lang == "ja" ? (
        <>
          <Paragraph>
            このWebサイトについてのお問い合わせは{" "}
            <a href="mailto:tsemi@digitalmuseum.jp">tsemi@digitalmuseum.jp</a>{" "}
            までお願いいたします。
          </Paragraph>
          <Paragraph>
            ソースコードは{" "}
            <a href="https://github.com/ChezTachibana/website">GitHub</a>{" "}
            で公開しています。
          </Paragraph>
        </>
      ) : (
        <>
          <Paragraph>
            If you have any questions about this website, please contact{" "}
            <a href="mailto:tsemi@digitalmuseum.jp">tsemi@digitalmuseum.jp</a>.
          </Paragraph>
          <Paragraph>
            Source code of this website is available at{" "}
            <a href="https://github.com/ChezTachibana/website">GitHub</a>.
          </Paragraph>
        </>
      )}
      {/* <Heading size={5} mt={5} id="credit">
              クレジット
            </Heading>
            <Table size="fullwidth" striped hoverable>
              <tbody>
                <tr>
                  <th>デザイン・制作</th>
                  <td>
                    <a href="https://junkato.jp/ja">加藤 淳</a> /{" "}
                    <a href="https://archinc.jp/ja">アーチ株式会社</a>
                  </td>
                </tr>
                <tr>
                  <th>制作進行・データ整備</th>
                  <td>須佐美 智博</td>
                </tr>
                <tr>
                  <th>制作補助</th>
                  <td>徳田 周子</td>
                </tr>
                <tr>
                  <th>シェ・タチバナ ロゴ制作</th>
                  <td>穂積 和夫</td>
                </tr>
                <tr>
                  <th>ロゴデータ整備・アイコンデザイン</th>
                  <td>ナカムラ ミサト</td>
                </tr>
                <tr>
                  <th>フロントエンド フレームワーク</th>
                  <td>
                    <a href="https://nextjs.org">Next.js</a>
                  </td>
                </tr>
                <tr>
                  <th>CSS フレームワーク</th>
                  <td>
                    <a href="https://bulma.io">Bulma</a>
                  </td>
                </tr>
                <tr>
                  <th>タイポグラフィ</th>
                  <td>
                    <a href="https://fontdasu.com/shippori-mincho">
                      しっぽり明朝
                    </a>{" "}
                    /{" "}
                    <a href="https://fonts.google.com/specimen/Shippori+Mincho?subset=japanese&amp;category=Serif">
                      Google Fonts
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table> */}
    </Box>
  );
};
