import { FC, useMemo } from "react";
import { Element, Message } from "react-bulma-components";

import { PublicMessageEntry } from "../../lib/PublicMessageEntry";
import { textToId } from "../../lib/textToId";

import { MessageElement } from "./MessageElement";

interface IProps {
  message: PublicMessageEntry;
}

export const PublicMessage: FC<IProps> = ({ message }) => {
  const id = useMemo(() => textToId(message?.name), [message?.name]);
  return (
    <Message id={id || undefined}>
      <Message.Body>
        <MessageElement text={message.body} />
        <Element textAlign="right" textColor="grey" mt={3}>
          <a href={`#${id}`}>{message.name}</a>
        </Element>
        {message.affiliation && (
          <Element textAlign="right" textColor="grey" mt={3} mb={4}>
            {message.affiliation}
          </Element>
        )}
        {message.postfix && <MessageElement text={message.postfix} />}
      </Message.Body>
    </Message>
  );
};
