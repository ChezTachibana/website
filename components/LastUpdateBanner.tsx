import { FC, useContext } from "react";
import { Element, Tag } from "react-bulma-components";
import { LastUpdateContext } from "./LastUpdateContext";

export const LastUpdateBanner: FC = () => {
  const lastUpdate = useContext(LastUpdateContext);
  return lastUpdate ? (
    <Element textAlign="right">
      <Tag color="primary" rounded renderAs="a" href="#news">
        {lastUpdate}
      </Tag>
    </Element>
  ) : (
    <></>
  );
};
