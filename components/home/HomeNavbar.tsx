import { FC, forwardRef, useContext } from "react";
import Link from "next/link";
import { Box, Image, Navbar } from "react-bulma-components";

import styles from "../../styles/HomeNavbar.module.css";
import biographyIcon from "../../images/chez-tachibana-office.svg";
import personalHistoryIcon from "../../images/chez-tachibana-person.svg";
import workLifeIcon from "../../images/paw.svg";
import publicationIcon from "../../images/open-book.svg";
import televisionIcon from "../../images/tv.svg";
import linkIcon from "../../images/globe.svg";

import LanguageContext from "../../lib/LanguageContext";

const NavbarItem: typeof Navbar.Item = forwardRef((props, ref) => (
  <Navbar.Item {...props} domRef={ref as any} />
)) as any;

export const HomeNavbar: FC = () => {
  const lang = useContext(LanguageContext);

  return (
    <Box>
      <Navbar>
        <Navbar.Menu className={`is-active ${styles.navmenu}`} shadowless>
          <Link href="/biography" passHref>
            <NavbarItem>
              <Image
                src={biographyIcon}
                alt={lang == "ja" ? "[家のアイコン]" : undefined}
                mr={2}
              />
              {lang == "ja" ? "職歴" : "Biography"}
            </NavbarItem>
          </Link>
          <Link href="/personal-history" passHref>
            <NavbarItem>
              <Image
                src={personalHistoryIcon}
                alt={lang == "ja" ? "[人のアイコン]" : undefined}
                mr={2}
              />
              {lang == "ja" ? "個人史" : "Personal History"}
            </NavbarItem>
          </Link>
          <Link href="/work" passHref>
            <NavbarItem>
              <Image
                src={workLifeIcon}
                alt={lang == "ja" ? "[猫の手のアイコン]" : undefined}
                mr={2}
              />
              {lang == "ja" ? "立花隆の仕事" : "Work"}
            </NavbarItem>
          </Link>
          <Link href="/publication" passHref>
            <NavbarItem>
              <Image
                src={publicationIcon}
                alt={lang == "ja" ? "[本のアイコン]" : undefined}
                mr={2}
              />
              {lang == "ja" ? "著書の一覧" : "Publications"}
            </NavbarItem>
          </Link>
          <Link href="/television" passHref>
            <NavbarItem>
              <Image
                src={televisionIcon}
                alt={lang == "ja" ? "[テレビのアイコン]" : undefined}
                mr={2}
              />
              {lang == "ja" ? "出演番組の一覧" : "TV Programs"}
            </NavbarItem>
          </Link>
          <Link href="/link" passHref>
            <NavbarItem>
              <Image
                src={linkIcon}
                alt={lang == "ja" ? "[地球のアイコン]" : undefined}
                mr={2}
              />
              {lang == "ja" ? "リンク" : "Links"}
            </NavbarItem>
          </Link>
        </Navbar.Menu>
      </Navbar>
    </Box>
  );
};
