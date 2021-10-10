import { GetStaticProps, NextPage } from "next";
import { Container, Heading, Section } from "react-bulma-components";

import { listImages } from "../../lib/listImages";
import ImagesContext from "../../lib/ImagesContext";

import { Layout } from "../../components/Layout";
import { Logo } from "../../components/home/Logo";
import { SeminarBox } from "../../components/seminar/SeminarBox";
import { BooksBox } from "../../components/seminar/BooksBox";
import { ContactBox } from "../../components/seminar/ContactBox";

interface IProps {
  images: string[];
}

const Contact: NextPage<IProps> = ({ images }) => {
  return (
    <ImagesContext.Provider value={images}>
      <Layout footer="立花隆ゼミについて" path="seminar">
        <Container>
          <Logo />
          <Heading textAlign="center" size={4} mb={6}>
            立花隆公式サイト
          </Heading>
          <Section>
            <SeminarBox />
            <BooksBox />
            <ContactBox />
          </Section>
        </Container>
      </Layout>
    </ImagesContext.Provider>
  );
};

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
