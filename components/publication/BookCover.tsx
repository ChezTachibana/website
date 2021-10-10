import { FC } from "react";

import styles from "../../styles/BookCover.module.css";

interface IProps {
  image: string;
}

export const BookCover: FC<IProps> = ({ image }) => (
  <img
    className={styles.book}
    src={`/book-covers/${image}`}
    alt={`[書影 ${image}]`}
  />
);
