import { FC } from "react";
import { Columns, Element } from "react-bulma-components";

import styles from "../styles/RightAlignedColumns.module.css";

export const RightAlignedColumns: FC = ({ children }) =>
  !children ? (
    <></>
  ) : Array.isArray(children) ? (
    <Columns gap={1 as any} className={styles.columns}>
      {children.map((el, i) => (
        <Columns.Column key={i} textAlign="right" narrow={i > 0}>
          {el}
        </Columns.Column>
      ))}
    </Columns>
  ) : (
    <Element className={styles.element} textAlign="right">
      {children}
    </Element>
  );
