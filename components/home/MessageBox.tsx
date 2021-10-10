import { FC, useContext } from "react";
import { Box, Element, Heading } from "react-bulma-components";

import LanguageContext from "../../lib/LanguageContext";

import { Paragraph } from "../Paragraph";
import { LinkButton } from "../LinkButton";

import styles from "../../styles/MessageBox.module.css";
import svgIcon from "../../images/language.svg";

export const MessageBox: FC = () => {
  const lang = useContext(LanguageContext);

  return (
    <Box id="about">
      <Heading size={5}>
        {lang == "ja" ? "立花隆公式サイトについて" : "About this website"}
      </Heading>
      {lang == "ja" ? (
        <>
          <Paragraph>
            このWebサイトは、フリージャーナリストである立花隆氏が1990年代後半から2000年代にかけて東京大学と立教大学で教鞭を取った際、その授業（ゼミナール）に参加していた元学生たちによって自主的に運営されています。
          </Paragraph>
          <Paragraph>
            著書の一覧など立花先生の経歴を紹介するとともに、学生の目から見た立花先生との思い出を掲載しています。
          </Paragraph>
        </>
      ) : (
        <>
          <Paragraph>
            The former students of Takashi Tachibana, the renowned freelance
            journalist in Japan, have created and operated this website. The
            students participated in his seminar classes when he taught at the
            University of Tokyo and Rikkyo University from the late 1990s to the
            2000s.
          </Paragraph>
          <Paragraph>
            This website introduces Takashi Tachibana's career including the
            list of his books and memories of him from the students'
            perspective. Most of the contents are currently provided in Japanese
            and are not translated into English.
          </Paragraph>
        </>
      )}
      <Element textAlign="right" mt={2}>
        <LinkButton href={lang == "ja" ? "/seminar" : "/en/seminar"} mt={2}>
          {lang == "ja" ? "立花隆ゼミについて" : "About Tachibana Seminar"}
        </LinkButton>
        <LinkButton href={lang == "ja" ? "/en" : "/"} rightAligned mt={2}>
          <img className={styles.icon} src={svgIcon} />
          {lang == "ja" ? "English" : "日本語"}
        </LinkButton>
      </Element>
    </Box>
  );
};
