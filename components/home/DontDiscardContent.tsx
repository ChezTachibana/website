import { FC } from "react";
import { Button, Element } from "react-bulma-components";
import { ElementProps } from "react-bulma-components/src/components";

import { Paragraph } from "../Paragraph";

export const DontDiscardContent: FC<ElementProps<{}, "div">> = (props) => (
  <>
    <Element renderAs="p" mt={2} textWeight="bold" textColor="danger">
      立花先生が生前に残された原稿や資料等が廃棄されるかもしれません。
    </Element>
    <Paragraph>
      本当なら思いとどまって欲しいという想いから、生前に親交のあった方々からメッセージを募集し、公開しています。
    </Paragraph>
    <Paragraph>
      本件に関して、東京新聞12月26日（月）朝刊 見開きで報道されました。
      <a href="https://www.tokyo-np.co.jp/article/222060">Web版の記事</a>
      も掲載されています。
    </Paragraph>
    <Element
      textAlign="center"
      mt={3}
      p={5}
      backgroundColor="white-ter"
      {...props}
    >
      <Button
        renderAs="a"
        href="https://sites.google.com/view/tsemi/"
        color="danger"
      >
        親交のあった方々からのメッセージ
      </Button>
    </Element>
  </>
);
