import { NextPage } from "next";
import { Box, Container, Heading, Section } from "react-bulma-components";

import { Layout } from "../components/Layout";
import { Paragraph } from "../components/Paragraph";
import { Logo } from "../components/home/Logo";

const PrivacyPolicy: NextPage = () => {
  return (
    <Layout footer="プライバシーポリシー" path="privacy-policy">
      <Container>
        <Logo />
        <Heading textAlign="center" size={4} mb={6}>
          立花隆公式サイト
        </Heading>
        <Section>
          <Box id="policy">
            <Heading>プライバシーポリシー</Heading>
            <Paragraph>
              このWebサイトの利用方法は{" "}
              <a href="https://analytics.google.com/analytics/web/">
                Google Analytics
              </a>
              というツールによって収集されています。 Google Analytics
              は、ユーザのWebサイトへの訪問頻度、どのページを訪問したか、どのWebサイトからこのサイトに訪問したか、といった情報を収集しています。このような情報は、このWebサイトをよりよいものにするためにのみ、利用されます。
            </Paragraph>
            <Paragraph>
              Google Analytics
              はあなたのIPアドレスと訪問日時のみを収集し、名前やその他の個人の特定につながるような情報は収集しません。また、このWebサイトの運営者はそうした情報を他の個人を特定可能な情報と照合しません。
              Google Analytics
              はあなたが次回このWebサイトを訪問したときに同一人物であることを特定できるCookieをWebブラウザに残しますが、このCookieはGoogle以外に利用されることはありません。
            </Paragraph>
            <Paragraph>
              Google が Google Analytics
              によって収集したあなたについての情報をどう利用し、共有するかは
              <a href="https://www.google.com/analytics/terms/">
                Google Analytics の利用規約
              </a>
              と
              <a href="https://www.google.com/privacypolicy.html">
                Google のプライバシーポリシー
              </a>
              によって定められています。WebブラウザのCookieをオフにすると、あなたが次回このWebサイトを訪問したときに、Google
              Analytics によって同一人物として特定されないようにできます。
            </Paragraph>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default PrivacyPolicy;
