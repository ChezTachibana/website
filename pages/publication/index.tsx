import { GetStaticProps, NextPage } from "next";
import { Container, Section } from "react-bulma-components";

import { listImages } from "../../lib/listImages";
import ImagesContext from "../../lib/ImagesContext";
import { PublicationEntry } from "../../lib/PublicationEntry";

import { Layout } from "../../components/Layout";
import { PublicationSection } from "../../components/publication/PublicationSection";

interface IProps {
  images: string[];
  entries: PublicationEntry[];
}

const Publication: NextPage<IProps> = ({ images, entries }) => {
  return (
    <ImagesContext.Provider value={images}>
      <Layout
        header="著書"
        description="立花隆の著書のタイトルと書影の一覧です。"
        path="publication"
      >
        <Container>
          <Section>
            <p>立花隆の著書の一覧です。</p>
          </Section>
          <PublicationSection entries={entries} />
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

    // create db
    const db: {
      [key: string]: PublicationEntry;
    } = {};
    entries = JSON.parse(text.toString());
    entries.forEach((e) => (db[e.id] = e));

    // find images
    const dirPath = "./public/book-covers";
    // const path = await import("path");
    (await fs.readdir(dirPath)).forEach((name) => {
      // path.resolve(dirPath, name)
      const arr = /^([0-9]+)/.exec(name);
      if (!arr) {
        return;
      }
      const id = arr[1];
      if (!db[id]) {
        return;
      }

      // add found images to the array
      const images = db[id].images || [];
      images.push(name);
      db[id].images = images;
    });
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

export default Publication;
