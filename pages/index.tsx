import { GetStaticProps, NextPage } from "next";
import { Container, Heading } from "react-bulma-components";

import { listImages } from "../lib/listImages";
import ImagesContext from "../lib/ImagesContext";

import { Layout } from "../components/Layout";
import { Logo } from "../components/home/Logo";
import { HomeNavbar } from "../components/home/HomeNavbar";
import { MessageBox } from "../components/home/MessageBox";
import { NewsBox } from "../components/home/NewsBox";
import { RipBox } from "../components/home/RipBox";

interface IProps {
  images: string[];
}

const Home: NextPage<IProps> = ({ images }) => {
  return (
    <ImagesContext.Provider value={images}>
      <Layout>
        <Container>
          <Logo />
          <Heading textAlign="center" size={4} mb={6}>
            立花隆公式サイト
          </Heading>
          <HomeNavbar />
          <MessageBox />
          <RipBox />
          <NewsBox />
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

export default Home;
