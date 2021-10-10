import { FC } from "react";

import styles from "../styles/ImageCard.module.css";

interface IProps {
  image: string;
  caption: string;
}

export const ImageCard: FC<IProps> = ({ image, caption }) => (
  <div className={styles["image-card"]}>
    <div className={styles.image}>
      <img src={image} />
    </div>
    <div className={styles.caption}>{caption}</div>
  </div>
);
