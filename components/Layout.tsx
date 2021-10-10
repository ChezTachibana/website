import { FC, useContext, useEffect, useMemo, useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import { Box, Container, Footer } from "react-bulma-components";

import { MainBreadcrumb } from "./MainBreadcrumb";
import { GA_TRACKING_ID } from "../lib/useGoogleAnalytics";
import ImagesContext from "../lib/ImagesContext";
import logo from "../images/chez-tachibana-logo.svg";
import altLogo from "../images/chez-tachibana-logo.png";
import website from "../data/website.json";

import { ImageCard } from "./ImageCard";
import LanguageContext from "../lib/LanguageContext";

const __html = `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${GA_TRACKING_ID}",{page_path:window.location.pathname});`;

interface IProps {
  header?: string;
  footer?: string;
  title?: string;
  description?: string;
  path?: string;
}

export const Layout: FC<IProps> = ({
  header,
  footer,
  title,
  description,
  path,
  children,
}) => {
  const lang = useContext(LanguageContext);
  footer = footer || header || undefined;
  title = title || header || footer || undefined;
  title = `${title ? `${title} ― ` : ""}Chez TACHIBANA`;
  description =
    description ||
    (lang === "ja"
      ? "立花隆の公式サイトです。"
      : "This is the official website of the renowned Japanese journalist Takashi Tachibana.");
  const url = `${website.basePath}${lang === "ja" ? "" : "en/"}${path || ""}`;
  const images = useContext(ImagesContext);
  const [randomImage, setRandomImage] = useState<string | null>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !Array.isArray(images) ||
      images.length <= 0
    ) {
      return;
    }
    const path = images[Math.floor(Math.random() * images.length)];
    console.log("random image:", path);
    if (path) {
      setRandomImage(path);
    }
  }, [images]);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          type: "website",
          locale: lang === "ja" ? "ja_JP" : "en_US",
          url,
          site_name: title,
        }}
        twitter={{
          cardType: "summary",
        }}
      />
      <Head>
        <title key="title">{title}</title>
        <link rel="icon" href={logo} type="image/svg+xml" />
        <link rel="mask-icon" href={logo} type="image/svg+xml" />
        <link rel="icon alternate" href={altLogo} type="image/png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;700&amp;display=swap"
          rel="stylesheet"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html,
          }}
        />
      </Head>

      {header && (
        <header>
          <Container>
            <Box>
              <MainBreadcrumb title={header} />
            </Box>
          </Container>
        </header>
      )}
      <main>{children}</main>

      <Footer>
        {footer && (
          <Container>
            <MainBreadcrumb title={footer} right={true} withoutLogo={true} />
          </Container>
        )}
        <Container textAlign="right" p={3} className="copyright">
          &copy;{" "}
          {lang === "ja" ? (
            <>
              <Link href="/seminar">
                <a>立花隆ゼミ</a>
              </Link>{" "}
              2021（
              <Link href="/privacy-policy">
                <a>プライバシーポリシー</a>
              </Link>
              ）{" "}
            </>
          ) : (
            <>
              <Link href="/en/seminar">
                <a>Tachibana Seminar</a>
              </Link>{" "}
              2021 (
              <Link href="/en/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
              )
            </>
          )}
        </Container>
        {randomImage && (
          <Container textAlign="center">
            <ImageCard
              image={randomImage}
              caption={
                lang === "ja" ? "立花隆の日常" : "Takashi on a certain day"
              }
            />
          </Container>
        )}
      </Footer>
    </>
  );
};
