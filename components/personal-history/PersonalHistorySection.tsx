import { FC } from "react";
import { Section } from "react-bulma-components";
import { PersonalHistoryBox } from "./PersonalHistoryBox";
import { PersonalHistoryHeading } from "./PersonalHistoryHeading";

interface IProps {
  year: number;
  age: number | null;
  entry: string[];
}

export const PersonalHistorySection: FC<IProps> = ({ year, age, entry }) =>
  Array.isArray(entry) && entry.length > 0 ? (
    <Section id={String(year)}>
      <PersonalHistoryHeading year={year} age={age} />
      <PersonalHistoryBox entries={entry} />
    </Section>
  ) : (
    <></>
  );
