import { FC } from "react";
import { Box, Element, Heading, Table, Tag } from "react-bulma-components";

import styles from "../../styles/NewsBox.module.css";
import { Paragraph } from "../Paragraph";

interface TvEntry {
  date: string;
  time: string;
  category: string;
  title: string;
  link?: string;
  originalDate?: string;
}

interface PublicationEntry {
  date: string;
  title: string;
  subtitle?: string;
  link?: string;
}

const tvHistory: TvEntry[] = [
  {
    date: "2021年6月27日（日）",
    time: "15:05～15:54",
    category: "NHKスペシャル",
    title: "立花隆のシベリア鎮魂歌～抑留画家・香月泰男～",
    link: "https://www.nhk.jp/p/special/ts/2NY2QQLPM3/episode/te/XL641WL9P9/",
    originalDate: "1995",
  },
  {
    date: "2021年6月29日（火）",
    time: "00:25～01:39",
    category: "NHKスペシャル",
    title: "立花隆 最前線報告 サイボーグ技術が人類を変える",
    link: "https://www2.nhk.or.jp/archives/tv60bin/detail/index.cgi?das_id=D0009050356_00000",
    originalDate: "2005",
  },
  {
    date: "2021年6月29日（火）",
    time: "01:39～02:38",
    category: "ETV特集",
    title: "立花隆 次世代へのメッセージ～わが原点の広島・長崎から～",
    link: "https://www.nhk.or.jp/archives/shogenarchives/no-more-hibakusha/library/bangumi/ja/182/",
    originalDate: "2015",
  },
  {
    date: "2021年6月30日（水）",
    time: "00:25～01:38",
    category: "NHKスペシャル",
    title: "立花隆 思索ドキュメント がん 生と死の謎に挑む",
    link: "https://www2.nhk.or.jp/archives/tv60bin/detail/index.cgi?das_id=D0009010763_00000",
    originalDate: "2009",
  },
  {
    date: "2021年6月30日（水）",
    time: "22:00～22:30",
    category: "クローズアップ現代+",
    title: "知ることに終わりはない ～立花隆さんからのメッセージ～",
    link: "https://www.nhk.or.jp/gendai/articles/4564/index.html",
  },
  {
    date: "2021年7月1日（木）",
    time: "01:00～02:13",
    category: "NHKスペシャル",
    title: "臨死体験 立花隆 思索ドキュメント死ぬとき心はどうなるのか",
    link: "https://www6.nhk.or.jp/special/detail/index.html?aid=20140914",
    originalDate: "2014",
  },
  {
    date: "2021年10月16日（土）",
    time: "05:40～05:50",
    category: "NHK映像ファイル あの人に会いたい",
    title: "立花隆（ジャーナリスト）",
    link: "https://www.nhk.jp/p/anohito/ts/K15V8PLV63/episode/te/J5G9M1LVWZ/",
  },
  {
    date: "2021年12月16日（木）",
    time: "13:00～13:30",
    category: "徹子の部屋 追悼特集",
    title:
      "ジェリー藤尾、瀬戸内寂聴、柳家小三治、平原まこと、李麗仙、寺内タケシ、立花隆",
    link: "https://www.nhk.jp/p/anohito/ts/K15V8PLV63/episode/te/J5G9M1LVWZ/",
  },
  {
    date: "2021年12月31日（金）",
    time: "06:10～13:39",
    category: "NHK 耳をすませば",
    title: "知の巨人、最後の言葉～半藤一利・立花隆～",
    link: "https://www.nhk.jp/p/mimisuma/ts/LX5XQ8M1M6/episode/te/7N6KKJ55QJ/",
  },
];

const tvPlans: TvEntry[] = [];

const publicationHistory: PublicationEntry[] = [
  {
    date: "2021年7月1日（木）",
    title: "週刊文春 2021年7月8日号",
    subtitle: "追悼保存版14ページ 立花隆の「遺言」",
    link: "http://shukan.bunshun.jp/articles/-/14948",
  },
  {
    date: "2021年7月9日（金）",
    title: "文藝春秋 2021年8月号",
    subtitle: "＜追悼特集＞私たちが見た「戦後最大のジャーナリスト」",
    link: "https://bunshun.jp/articles/-/46990",
  },
  {
    date: "2021年7月9日（金）",
    title: "中央公論 2021年8月号",
    subtitle: "追悼・立花隆 「知の巨人」のジャーナリズム（佐藤優）",
    link: "https://chuokoron.jp/chuokoron/backnumber/117739.html",
  },
  {
    date: "2021年8月10日（火）",
    title: "＜中央公論新社新刊＞ 立花隆 最後に語り伝えたいこと",
    subtitle: "大江健三郎との対話と長崎大学の講演",
    link: "/books/tachibana-chuko-news-release.pdf",
  },
  {
    date: "2021年8月16日（月）",
    title: "文春ムック 「知の巨人」立花隆のすべて",
    subtitle:
      "田中角栄から宇宙まで 何でも知ろうとした「戦後最大のジャーナリスト」",
    link: "https://www.bunshun.co.jp/business/extra/backnumber.html?itemid=459&dispmid=592",
  },
  {
    date: "2021年8月27日（金）",
    title: "ユリイカ 2021年9月号",
    subtitle: "特集＝立花隆",
    link: "http://www.seidosha.co.jp/book/index.php?id=3602",
  },
  {
    date: "2021年9月10日（金）",
    title: "立花隆 長崎を語る",
    subtitle: "長崎が生んだ「知の巨人」追悼と鎮魂、そして人類",
    link: "https://www.e-bunken.com/shopdetail/000000000411",
  },
];

const publicationPlans: PublicationEntry[] = [];

export const NewsBox: FC = () => (
  <Box id="news" className={styles.tv}>
    <Heading size={5} display="flex" alignItems="center">
      <Element pr={2}>最新情報</Element>
      <Tag color="primary" rounded>
        2022/1/5 更新
      </Tag>
    </Heading>
    {publicationPlans.length > 0 && (
      <>
        <Paragraph>以下の雑誌と書籍が刊行予定です。</Paragraph>
        <Table size="fullwidth" mt={3} striped hoverable>
          <tbody>
            {publicationPlans.map(({ date, title, subtitle, link }, i) => (
              <tr key={i}>
                <td className={styles.date}>
                  <p>
                    <Element renderAs="span" display="inline-block">
                      {date}
                    </Element>
                  </p>
                </td>
                <td>
                  <p>{link ? <a href={link}>{title}</a> : title}</p>
                  {subtitle && <p>{subtitle}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    )}
    {tvPlans.length > 0 && (
      <>
        <Paragraph>以下の日程で、関連番組が放映予定です。</Paragraph>
        <Table size="fullwidth" mt={3} striped hoverable>
          <tbody>
            {tvPlans.map(
              ({ date, time, category, title, link, originalDate }, i) => (
                <tr key={i}>
                  <td className={styles.date}>
                    <p>
                      <Element renderAs="span" display="inline-block">
                        {date}
                      </Element>
                      <Element renderAs="span" display="inline-block">
                        {time}
                      </Element>
                    </p>
                    {originalDate && (
                      <Element renderAs="p" textColor="grey">
                        初放送: {originalDate}年
                      </Element>
                    )}
                  </td>
                  <td>
                    <Element>
                      <small>{category}</small>
                    </Element>
                    <Element>
                      {link ? <a href={link}>{title}</a> : title}
                    </Element>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </>
    )}
    <Paragraph>以下の雑誌と書籍が刊行されました。</Paragraph>
    <Table size="fullwidth" mt={3} striped hoverable>
      <tbody>
        {publicationHistory.map(({ date, title, subtitle, link }, i) => (
          <tr key={i}>
            <td className={styles.date}>
              <p>
                <Element renderAs="span" display="inline-block">
                  {date}
                </Element>
              </p>
            </td>
            <td>
              <p>{link ? <a href={link}>{title}</a> : title}</p>
              {subtitle && <p>{subtitle}</p>}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Paragraph>
      また、以下の日程で、関連番組が放映されました。
      <a href="https://www3.nhk.or.jp/news/html/20210623/k10013098951000.html">
        NHK NEWS WEBのおくやみの記事
      </a>
      や、
      <a href="https://www6.nhk.or.jp/nhkpr/post/original.html?i=29880">
        関連番組をまとめたNHKオンラインの特設ページ
      </a>
      もご覧ください。
    </Paragraph>
    <Table size="fullwidth" mt={3} striped hoverable>
      <tbody>
        {tvHistory.map(
          ({ date, time, category, title, link, originalDate }, i) => (
            <tr key={i}>
              <td className={styles.date}>
                <p>
                  <Element renderAs="span" display="inline-block">
                    {date}
                  </Element>
                  <Element renderAs="span" display="inline-block">
                    {time}
                  </Element>
                </p>
                {originalDate && (
                  <Element renderAs="p" textColor="grey">
                    初放送: {originalDate}年
                  </Element>
                )}
              </td>
              <td>
                <Element>
                  <small>{category}</small>
                </Element>
                <Element>{link ? <a href={link}>{title}</a> : title}</Element>
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  </Box>
);
