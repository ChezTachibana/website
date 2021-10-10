import { FC } from "react";

import { Element } from "react-bulma-components";

interface IProps {
  date: string | null;
}

export const TelevisionDate: FC<IProps> = ({ date }) => {
  if (!date) return <>放送日不明</>;
  const res = /^([0-9]+)年(.+)$/.exec(date);
  if (!res) return <>{date}</>;
  const [, year, rest] = res;
  return (
    <>
      <Element renderAs="span" display="inline-block">
        {year}年
      </Element>
      <Element renderAs="span" display="inline-block">
        {rest}
      </Element>
    </>
  );
};
