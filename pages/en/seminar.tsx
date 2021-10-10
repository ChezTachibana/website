import { GetStaticProps, NextPage } from "next";
import { Container, Element, Heading, Section } from "react-bulma-components";

import { listImages } from "../../lib/listImages";
import ImagesContext from "../../lib/ImagesContext";
import LanguageContext from "../../lib/LanguageContext";

import { Layout } from "../../components/Layout";
import { Logo } from "../../components/home/Logo";
import { SeminarBox } from "../../components/seminar/SeminarBox";
// import { BooksBox } from "../../components/seminar/BooksBox";
import { ContactBox } from "../../components/seminar/ContactBox";

interface IProps {
  images: string[];
}

const Contact: NextPage<IProps> = ({ images }) => (
  <LanguageContext.Provider value="en">
    <ImagesContext.Provider value={images}>
      <Layout footer="About Tachibana Seminar" path="seminar">
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
            <SeminarBox />
            {/* <BooksBox /> */}
            <ContactBox />
          </Section>
        </Container>
      </Layout>
    </ImagesContext.Provider>
  </LanguageContext.Provider>
);

export const getStaticProps: GetStaticProps<IProps> = async () => {
  try {
    return {
      props: {
        images: await listImages(),
      },
    };
  } catch (_) {
    return {
      props: {
        images: [],
      },
    };
  }
};

export default Contact;
