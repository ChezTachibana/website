import { GetStaticProps, NextPage } from "next";
import { Container, Element, Heading } from "react-bulma-components";

import { listImages } from "../../lib/listImages";
import ImagesContext from "../../lib/ImagesContext";
import LanguageContext from "../../lib/LanguageContext";

import { Layout } from "../../components/Layout";
import { Logo } from "../../components/home/Logo";
import { HomeNavbar } from "../../components/home/HomeNavbar";
import { MessageBox } from "../../components/home/MessageBox";
// import { NewsBox } from "../../components/home/NewsBox";
import { RipBox } from "../../components/home/RipBox";

interface IProps {
  images: string[];
}

const Home: NextPage<IProps> = ({ images }) => {
  return (
    <LanguageContext.Provider value="en">
      <ImagesContext.Provider value={images}>
        <Layout>
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
            <MessageBox />
            <RipBox />
            {/* <NewsBox /> */}
            <HomeNavbar />
          </Container>
        </Layout>
      </ImagesContext.Provider>
    </LanguageContext.Provider>
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

export default Home;
