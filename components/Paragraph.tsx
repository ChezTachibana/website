import { FC } from "react";
import { Element } from "react-bulma-components";

export const Paragraph: FC = ({ children }) => (
  <Element renderAs="p" mt={2}>
    {children}
  </Element>
);
