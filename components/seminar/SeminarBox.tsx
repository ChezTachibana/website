import { FC, useContext } from "react";
import Link from "next/link";
import { Box, Content, Heading } from "react-bulma-components";

import LanguageContext from "../../lib/LanguageContext";

import { Paragraph } from "../Paragraph";

export const SeminarBox: FC = () => {
  const lang = useContext(LanguageContext);

  return (
    <Box id="seminar">
      <Heading>
        {lang == "ja" ? "立花隆ゼミについて" : "About Tachibana Seminar"}
      </Heading>
      {lang == "ja" ? (
        <>
          <Paragraph>
            立花隆ゼミは、東京大学
            教養学部で第一期から第三期まで、立教大学では大学院と学部で、各々開講されていたゼミナールです。
          </Paragraph>
          <Content>
            <ul>
              <li>
                東京大学 第一期立花隆ゼミ{" "}
                <a href="https://cyu.digitalmuseum.jp/about.html">
                  「このゼミについて」
                </a>
              </li>
              <li>
                東京大学 第二期立花隆ゼミ{" "}
                <a href="https://sci.digitalmuseum.jp/site/tsemi.php">
                  「立花隆ゼミについて」
                </a>
              </li>
              <li>
                東京大学 第三期立花隆ゼミ{" "}
                <a href="https://web.archive.org/web/20070527195901/http://kenbunden.net/kantougen.html">
                  「見聞伝 巻頭言」
                </a>
                （Internet Archive）
              </li>
              <li>
                立教大学大学院21世紀社会デザイン研究科 立花ゼミ{" "}
                <a href="https://tsemi.digitalmuseum.jp/2009/about/what.html">
                  「立教立花組とは何であるか」
                </a>
              </li>
            </ul>
          </Content>
          <Paragraph>
            このWebサイトは立花隆ゼミに参加していた元学生たちによって自主的に運営されています。
          </Paragraph>
          <Paragraph>
            <Link href="/link" passHref>
              <a>リンクのページ</a>
            </Link>
            に各ゼミのWebサイトへのリンクがあります。
          </Paragraph>
        </>
      ) : (
        <>
          <Paragraph>
            The Tachibana Seminar was held at The University of Tokyo, Faculty
            of Liberal Arts, and ran from the first (1996-), the second (2005-),
            and to the third semester (2007-2008). It was also held at Rikkyo
            University and ran at the graduate and undergraduate levels
            (2007-2009).
          </Paragraph>
          <Paragraph>
            The former students of Takashi Tachibana have created and operated
            this website.
          </Paragraph>
          <Paragraph>
            For more details about the seminar, please refer to{" "}
            <Link href="/seminar" passHref>
              <a>the Japanese page</a>
            </Link>
            .
          </Paragraph>
        </>
      )}
    </Box>
  );
};
