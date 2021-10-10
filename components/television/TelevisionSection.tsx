import { FC } from "react";
import { Box, Element, Heading, Section, Table } from "react-bulma-components";

import styles from "../../styles/TelevisionSection.module.css";

import { TelevisionEntry } from "../../lib/TelevisionEntry";

import { TelevisionTabs } from "./TelevisionTabs";
import { TelevisionDate } from "./TelevisionDate";

interface IProps {
  activeTab: "index" | "private";
  entries: TelevisionEntry[];
}

export const TelevisionSection: FC<IProps> = ({ activeTab, entries }) =>
  Array.isArray(entries) && entries.length > 0 ? (
    <Section id="television">
      <TelevisionTabs activeTab={activeTab} />
      <Box p={2}>
        <Table.Container>
          <Table size="fullwidth" className={styles.table}>
            <thead>
              <th>No./放送日</th>
              <th>番組名</th>
            </thead>
            <tbody>
              {entries.map((entry, i) => (
                <tr key={i}>
                  <th className="program-date">
                    <Element>{entry.no}</Element>
                    <Element renderAs="small" textColor="grey">
                      <TelevisionDate date={entry.date} />
                    </Element>
                  </th>
                  <td className="program-title">
                    <Element>{entry.title}</Element>
                    {entry.subtitle && (
                      <Element renderAs="small" textColor="grey">
                        {entry.subtitle}
                      </Element>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Table.Container>
      </Box>
    </Section>
  ) : (
    <></>
  );
