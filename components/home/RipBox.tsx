import { FC, useContext } from "react";
import { Box, Button, Columns, Element, Heading } from "react-bulma-components";

import LanguageContext from "../../lib/LanguageContext";

import { Paragraph } from "../Paragraph";
import { RightAlignedColumns } from "../RightAlignedColumns";
import { LinkButton } from "../LinkButton";

import styles from "../../styles/RipBox.module.css";
import svgIcon from "../../images/file-pdf.svg";

export const RipBox: FC = () => {
  const lang = useContext(LanguageContext);

  return (
    <Box id="rip">
      <Heading size={5}>{lang == "ja" ? "訃報" : "Obituary"}</Heading>
      {lang == "ja" ? (
        <Paragraph>
          立花隆先生が2021年4月30日に逝去されました。詳細は以下リンク先の訃報をご覧ください。
        </Paragraph>
      ) : (
        <Paragraph>
          Takashi Tachibana passed away on April 30, 2021. For details, please
          see the obituary at the following link.
        </Paragraph>
      )}
      <Element
        textAlign="center"
        mt={3}
        mb={lang == "ja" ? 3 : 0}
        p={5}
        backgroundColor="white-ter"
      >
        <Button
          renderAs="a"
          href={lang == "ja" ? "/announcement.pdf" : "/en/announcement.pdf"}
          color="black"
        >
          <img className={styles.icon} src={svgIcon} />
          {lang == "ja" ? "訃報" : "Obituary"}
        </Button>
      </Element>
      {lang == "ja" && (
        <>
          <Paragraph>
            生前に親交のあった方々や、立花隆ゼミの元学生たちからのお別れのメッセージを掲載しています。
          </Paragraph>
          <Columns mt={1} mb={3} gap={0 as any} className={styles.buttons}>
            <Columns.Column>
              <Element textAlign="center" p={3} backgroundColor="white-ter">
                <LinkButton href="/message">
                  <span>親交のあった方々</span>
                  <span>からの</span>
                  <span>メッセージ</span>
                </LinkButton>
              </Element>
            </Columns.Column>
            <Columns.Column>
              <Element textAlign="center" p={3} backgroundColor="white-ter">
                <LinkButton href="/seminar/message">
                  <span>ゼミ生</span>
                  <span>からの</span>
                  <span>メッセージ</span>
                </LinkButton>
              </Element>
            </Columns.Column>
          </Columns>
          <Paragraph>
            立花先生へのお別れのメッセージをお受けしております。受付フォームからご記入ください。
          </Paragraph>
          <RightAlignedColumns>
            <Button renderAs="a" href="https://forms.gle/GTUF6dBAecHCnWCZ7">
              メッセージ受付フォーム
            </Button>
          </RightAlignedColumns>
        </>
      )}
    </Box>
  );
};
