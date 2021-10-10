import { GetStaticProps, NextPage } from "next";
import { Container, Section } from "react-bulma-components";

import { listImages } from "../../lib/listImages";
import ImagesContext from "../../lib/ImagesContext";
import { PublicationEntry } from "../../lib/PublicationEntry";

import { Layout } from "../../components/Layout";
import { TitleOnlyPublicationSection } from "../../components/publication/TitleOnlyPublicationSection";

interface IProps {
  images: string[];
  entries: PublicationEntry[];
}

const TitleOnlyPublication: NextPage<IProps> = ({ images, entries }) => {
  return (
    <ImagesContext.Provider value={images}>
      <Layout
        header="著書"
        description="立花隆の著書タイトルの一覧です。"
        path="publication/title-only"
      >
        <Container>
          <Section>
            <p>立花隆の著書の一覧です。</p>
          </Section>
          <TitleOnlyPublicationSection entries={entries} />
        </Container>
      </Layout>
    </ImagesContext.Provider>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  let entries: PublicationEntry[];
  try {
    // read data
    const fs = (await import("fs")).promises;
    const text = await fs.readFile("data/publication.json");
    entries = JSON.parse(text.toString());
  } catch (_) {
    return {
      notFound: true,
    };
  }
  try {
    return {
      props: {
        images: await listImages(),
        entries,
      },
    };
  } catch (_) {
    return {
      props: {
        images: [],
        entries,
      },
    };
  }
};

export default TitleOnlyPublication;
