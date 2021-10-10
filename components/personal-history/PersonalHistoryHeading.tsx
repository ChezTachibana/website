import { FC } from "react";
import { Heading } from "react-bulma-components";

interface IProps {
  year: number;
  age: number | null;
}

export const PersonalHistoryHeading: FC<IProps> = ({ year, age }) => {
  let japaneseYear: string;
  if (year < 1989) {
    japaneseYear = `昭和 ${year - 1925} 年`;
  } else if (year === 1989) {
    japaneseYear = "昭和 64 年､平成 1 年";
  } else if (year < 2019) {
    japaneseYear = `平成 ${year - 1988} 年`;
  } else if (year === 2019) {
    japaneseYear = "平成 31 年、令和 1 年";
  } else {
    japaneseYear = `令和 ${year - 2018} 年`;
  }
  return (
    <>
      <Heading pb={1}>
        {year} 年（{japaneseYear}）
      </Heading>
      {typeof age === "number" && <Heading subtitle>{age} 歳</Heading>}
    </>
  );
};
