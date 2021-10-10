import { FC, useContext } from "react";
import Link from "next/link";
import { Breadcrumb, Image } from "react-bulma-components";

import styles from "../styles/MainBreadcrumb.module.css";
import logo from "../images/chez-tachibana-logo-black.svg?inline";
import LanguageContext from "../lib/LanguageContext";

interface IProps {
  title: string;
  right?: boolean;
  withoutLogo?: boolean;
}

export const MainBreadcrumb: FC<IProps> = ({ title, right, withoutLogo }) => {
  const lang = useContext(LanguageContext);
  return (
    <Breadcrumb className={`${styles.breadcrumb} ${right ? "right" : "left"}`}>
      <Breadcrumb.Item>
        <Link href={lang === "ja" ? "/" : "/en"} passHref>
          <a>
            {!withoutLogo && (
              <Image
                src={logo}
                alt={
                  lang === "ja"
                    ? "[Chez TACHIBANA ロゴ]"
                    : "[Chez TACHIBANA logo]"
                }
                size={48}
                mr={3}
              />
            )}
            Chez TACHIBANA
          </a>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <a>{title}</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
