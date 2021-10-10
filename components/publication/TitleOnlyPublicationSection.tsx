import { FC } from "react";
import { Box, Element, Heading, Section, Table } from "react-bulma-components";

import { PublicationEntry } from "../../lib/PublicationEntry";
import { PublicationTabs } from "./PublicationTabs";

interface IProps {
  entries: PublicationEntry[];
}

export const TitleOnlyPublicationSection: FC<IProps> = ({ entries }) =>
  Array.isArray(entries) && entries.length > 0 ? (
    <Section>
      <PublicationTabs activeTab="title-only" />
      <Box p={2}>
        <Table size="fullwidth" striped hoverable>
          <tbody>
            {entries.map((e) => (
              <tr key={e.id} id={`book-${e.id}`}>
                <td>
                  <Heading size={6} mb={1}>
                    {e.title}
                  </Heading>
                  {e.revisedTitle && (
                    <Heading subtitle size={6} mt={2}>
                      <Element display="inline" textColor="grey">
                        改題:{" "}
                      </Element>
                      {e.revisedTitle}
                    </Heading>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </Section>
  ) : (
    <></>
  );
