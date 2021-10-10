import { FC } from "react";
import {
  Box,
  Columns,
  Element,
  Heading,
  Section,
} from "react-bulma-components";

import { PublicationEntry } from "../../lib/PublicationEntry";

import { PublicationTabs } from "./PublicationTabs";
import { BookCover } from "./BookCover";
import { titleLength, imageLength } from "./utils";

interface IProps {
  entries: PublicationEntry[];
}

export const PublicationSection: FC<IProps> = ({ entries }) =>
  Array.isArray(entries) && entries.length > 0 ? (
    <Section>
      <PublicationTabs activeTab="index" />
      <Columns>
        {entries.map((e) => (
          <Columns.Column
            key={e.id}
            id={`book-${e.id}`}
            desktop={{
              size: ((titleLength(e) < 5 && imageLength(e) > 1
                ? 1
                : titleLength(e) > 10
                ? 3
                : 2) +
                imageLength(e) * 2) as any,
            }}
            tablet={{ size: (3 + imageLength(e) * 2) as any }}
          >
            <Box>
              <Columns>
                <Columns.Column>
                  <Heading size={4} mb={3}>
                    {e.title}
                  </Heading>
                  {e.revisedTitle && (
                    <Heading size={5} mt={1} subtitle>
                      <Element display="inline" textColor="grey">
                        改題:{" "}
                      </Element>
                      {e.revisedTitle}
                    </Heading>
                  )}
                </Columns.Column>
                {e.images ? (
                  <Columns.Column narrow>
                    <Columns breakpoint="mobile">
                      {e.images.map((image) => (
                        <Columns.Column key={image} narrow>
                          <BookCover image={image} />
                        </Columns.Column>
                      ))}
                    </Columns>
                  </Columns.Column>
                ) : (
                  <></>
                )}
              </Columns>
            </Box>
          </Columns.Column>
        ))}
      </Columns>
    </Section>
  ) : (
    <></>
  );
