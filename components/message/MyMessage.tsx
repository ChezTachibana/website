import { FC, useMemo } from "react";
import { Element, Message } from "react-bulma-components";

import styles from "../../styles/MyMessage.module.css";

import { MessageEntry } from "../../lib/MessageEntry";
import { textToId } from "../../lib/textToId";

import { MessageElement } from "./MessageElement";

interface IProps {
  message: MessageEntry;
}

export const MyMessage: FC<IProps> = ({ message }) => {
  const id = useMemo(() => textToId(message?.name), [message?.name]);
  return (
    <Message id={id || undefined}>
      <Message.Body className={styles.message}>
        {message.title && (
          <Element className={styles.title} mb={3}>
            {message.title}
          </Element>
        )}
        <MessageElement text={message.body} />
        <Element textAlign="right" textColor="grey" mt={3}>
          <a href={`#${id}`}>{message.name}</a>
        </Element>
        {message.affiliation && (
          <Element textAlign="right" textColor="grey" mt={1}>
            <small>{message.affiliation}</small>
          </Element>
        )}
      </Message.Body>
    </Message>
  );
};
