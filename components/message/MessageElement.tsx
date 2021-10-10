import { FC, Fragment, useMemo } from "react";
import { Element } from "react-bulma-components";

interface IProps {
  text: string;
}

const TextFragment: FC<{ text: string }> = ({ text: s }) => (
  <Fragment>
    {/^#/.test(s) ? <strong>{s.replace(/^#\s+/, "")}</strong> : s}
  </Fragment>
);

export const MessageElement: FC<IProps> = ({ text }) => {
  const lines = useMemo(() => {
    const fullWidthSpace = /^　/.test(text);
    const paragraphs = fullWidthSpace
      ? text.trim().split(/\n　+/)
      : text.split(/\n\s*\n/);
    return paragraphs
      .filter((l) => l.length > 0)
      .map((l, i) => {
        const els: JSX.Element[] = [];
        l.split("\n").forEach((s, i, arr) => {
          if (i + 1 < arr.length) {
            els.push(
              <TextFragment key={String(i)} text={s} />,
              <br key={`${i}br`} />
            );
          } else {
            els.push(<TextFragment key={String(i)} text={s} />);
          }
        });
        return (
          <Element key={i} renderAs="p" mb={4}>
            {els}
          </Element>
        );
      });
  }, [text]);
  return <Element>{lines}</Element>;
};
