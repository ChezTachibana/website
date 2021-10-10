import { PersonalHistorySection } from "./PersonalHistorySection";
import personalHistory from "../../data/personal-history.json";

const { startYear, entries } = personalHistory;
const currentYear = new Date().getFullYear();

export const PersonalHistorySections = () => (
  <>
    {entries.map((entry, i) => (
      <PersonalHistorySection
        key={i}
        year={startYear + i}
        age={startYear + i >= currentYear ? null : i}
        entry={entry}
      />
    ))}
  </>
);
