import { GetStaticProps, NextPage } from "next";
import { Container, Section } from "react-bulma-components";

import { listImages } from "../lib/listImages";
import ImagesContext from "../lib/ImagesContext";

import { Layout } from "../components/Layout";
import { PersonalHistorySections } from "../components/personal-history/PersonalHistorySections";

interface IProps {
  images: string[];
}

const PersonalHistory: NextPage<IProps> = ({ images }) => {
  return (
    <ImagesContext.Provider value={images}>
      <Layout
        header="個人史"
        description="立花隆の個人史です。"
        path="personal-history"
      >
        <Container>
          <Section>
            <p>立花隆の個人史です。</p>
          </Section>
          <PersonalHistorySections />
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

export default PersonalHistory;
