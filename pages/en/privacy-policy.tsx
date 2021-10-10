import { NextPage } from "next";
import {
  Box,
  Container,
  Element,
  Heading,
  Section,
} from "react-bulma-components";

import LanguageContext from "../../lib/LanguageContext";

import { Layout } from "../../components/Layout";
import { Paragraph } from "../../components/Paragraph";
import { Logo } from "../../components/home/Logo";

const PrivacyPolicy: NextPage = () => (
  <LanguageContext.Provider value="en">
    <Layout footer="Privacy Policy" path="privacy-policy">
      <Container>
        <Logo />
        <Heading textAlign="center" size={4} mb={6}>
          <Element renderAs="span" display="inline-block">
            Takashi Tachibana
          </Element>{" "}
          <Element renderAs="span" display="inline-block">
            Official Website
          </Element>
        </Heading>
        <Section>
          <Box id="policy">
            <Heading>Privacy Policy</Heading>
            <Paragraph>
              We use a tool called{" "}
              <a href="https://analytics.google.com/analytics/web/">
                Google Analytics
              </a>{" "}
              to collect information about use of this site. Google Analytics
              collects information such as how often users visit this site, what
              pages they visit when they do so, and what other sites they used
              prior to coming to this site. We use the information we get from
              Google Analytics only to improve this site.
            </Paragraph>
            <Paragraph>
              Google Analytics collects only the IP address assigned to you on
              the date you visit this site, rather than your name or other
              identifying information. We do not combine the information
              collected through the use of Google Analytics with personally
              identifiable information. Although Google Analytics plants a
              permanent cookie on your web browser to identify you as a unique
              user the next time you visit this site, the cookie cannot be used
              by anyone but Google.
            </Paragraph>
            <Paragraph>
              Google's ability to use and share information collected by Google
              Analytics about your visits to this site is restricted by the{" "}
              <a href="https://www.google.com/analytics/terms/">
                Google Analytics Terms of Use
              </a>{" "}
              and the{" "}
              <a href="https://www.google.com/privacypolicy.html">
                Google Privacy Policy
              </a>
              . You can prevent Google Analytics from recognizing you on return
              visits to this site by disabling cookies on your browser.
            </Paragraph>
          </Box>
        </Section>
      </Container>
    </Layout>
  </LanguageContext.Provider>
);

export default PrivacyPolicy;
