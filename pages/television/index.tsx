import { GetStaticProps, NextPage } from "next";
import { Container, Section } from "react-bulma-components";

import { listImages } from "../../lib/listImages";
import ImagesContext from "../../lib/ImagesContext";
import { TelevisionEntry } from "../../lib/TelevisionEntry";
import { loadTelevisionEntries } from "../../lib/loadTelevisionEntries";

import { Layout } from "../../components/Layout";
import { TelevisionSection } from "../../components/television/TelevisionSection";

interface IProps {
  images: string[];
  entries: TelevisionEntry[];
}

const Television: NextPage<IProps> = ({ images, entries }) => {
  return (
    <ImagesContext.Provider value={images}>
      <Layout
        title="出演番組（NHK）"
        header="出演番組"
        description="立花隆の出演番組（NHK）の一覧です。"
        path="television"
      >
        <Container>
          <Section>
            <p>立花隆の出演番組の一覧です。</p>
          </Section>
          <TelevisionSection activeTab="index" entries={entries} />
        </Container>
      </Layout>
    </ImagesContext.Provider>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const entries = await loadTelevisionEntries("data/television-nhk.csv");
  try {
    return {
      props: {
        entries,
        images: await listImages(),
      },
    };
  } catch (_) {
    return {
      props: {
        entries,
        images: [],
      },
    };
  }
};

export default Television;
