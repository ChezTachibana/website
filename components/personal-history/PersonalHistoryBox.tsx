import { FC } from "react";
import { Box, Table } from "react-bulma-components";

interface IProps {
  entries: string[];
}

export const PersonalHistoryBox: FC<IProps> = ({ entries }) => (
  <Box p={2}>
    <Table size="fullwidth">
      <tbody>
        {entries.map((entry, i) => (
          <tr key={i}>
            <td>{entry}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Box>
);
