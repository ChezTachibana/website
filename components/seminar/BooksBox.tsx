import { FC } from "react";
import { Box, Content, Heading } from "react-bulma-components";

import { Paragraph } from "../Paragraph";

export const BooksBox: FC = () => (
  <Box id="books">
    <Heading>立花隆ゼミの書籍について</Heading>
    <Paragraph>
      立花隆ゼミは、活動当時、成果を定期的に書籍化していました。ここでは、東京大学
      第二期ゼミおよび立教大学ゼミの小冊子をダウンロードできます。
    </Paragraph>
    <Content>
      <ul>
        <li>
          <a href="/books/060526-scinote.pdf">'06立花隆ゼミの小冊子 SCInote</a>
        </li>
        <li>
          <a href="/books/070518-scinote2.pdf">
            '07立花隆ゼミの小冊子 SCInote2
          </a>
        </li>
        <li>
          <a href="/books/tachibana-74yo.pdf">立花隆 74歳誕生日記念冊子</a>
        </li>
      </ul>
    </Content>
  </Box>
);
