import { FC } from "react";
import Link from "next/link";

import styles from "../../styles/Logo.module.css";
import logo from "../../images/chez-tachibana-full-logo.svg?inline";

export const Logo: FC = () => (
  <div className={styles.logo}>
    <Link href="/">
      <a>
        <img src={logo} alt="Chez TACHIBANA" />
      </a>
    </Link>
  </div>
);
