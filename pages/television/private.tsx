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

const Private: NextPage<IProps> = ({ images, entries }) => {
  return (
    <ImagesContext.Provider value={images}>
      <Layout
        title="出演番組（民放）"
        header="出演番組"
        description="立花隆の出演番組（民放）の一覧です。"
        path="television/private"
      >
        <Container>
          <Section>
            <p>立花隆の出演番組の一覧です。</p>
          </Section>
          <TelevisionSection activeTab="private" entries={entries} />
        </Container>
      </Layout>
    </ImagesContext.Provider>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const entries = await loadTelevisionEntries("data/television.csv");
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

export default Private;
