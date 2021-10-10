import { FC, useMemo } from "react";
import { Element } from "react-bulma-components";

interface IProps {
  buildTime: number;
}

export const BuildTimeBlock: FC<IProps> = ({ buildTime }) => {
  const text = useMemo(() => {
    const date = new Date(buildTime);
    return (
      <>
        <Element renderAs="span" display="inline-block">
          {`${date.getFullYear()} 年 ${
            date.getMonth() + 1
          } 月 ${date.getDate()} 日（${
            "日月火水木金土".split("")[date.getDay()]
          }）`}
        </Element>
        <Element renderAs="span" display="inline-block">
          {`${date.getHours()}`}時{`${date.getMinutes()}`}分
        </Element>
      </>
    );
  }, [buildTime]);
  return (
    <>
      <hr />
      <Element textAlign="right">
        <Element renderAs="span" textColor="grey">
          最終更新日時:
        </Element>{" "}
        {text}
      </Element>
    </>
  );
};
