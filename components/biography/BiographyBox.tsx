import { FC } from "react";
import { Box, Table } from "react-bulma-components";

interface IProps {
  roles: string[];
}

export const BiographyBox: FC<IProps> = ({ roles }) => (
  <Box p={2}>
    <Table size="fullwidth" striped>
      <tbody>
        {roles.map((role, i) => (
          <tr key={i}>
            <td>{role}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Box>
);
