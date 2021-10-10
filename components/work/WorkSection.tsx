import { FC } from "react";
import { Box, Heading, Section, Table } from "react-bulma-components";

import styles from "../../styles/WorkSection.module.css";

import { WorkEntry } from "../../lib/WorkEntry";

interface IProps {
  entries: WorkEntry[];
}

export const WorkSection: FC<IProps> = ({ entries }) => (
  <Section id="2011">
    <Heading pb={1}>立花隆の仕事</Heading>
    <Heading subtitle>2011 年（平成 23 年）の仕事一覧</Heading>
    <Box p={2}>
      <Table.Container>
        <Table size="fullwidth" className={styles.table}>
          <thead>
            <th>種類</th>
            <th colSpan={2}>活動内容</th>
          </thead>
          <tbody>
            {entries.map((entry, i) => (
              <tr key={i}>
                <th>{entry.category}</th>
                <td>{entry.title}</td>
                <td>{entry.detail}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Table.Container>
    </Box>
  </Section>
);
