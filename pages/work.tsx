import { GetStaticProps, NextPage } from "next";
import { Container, Section } from "react-bulma-components";

import { listImages } from "../lib/listImages";
import ImagesContext from "../lib/ImagesContext";
import { WorkEntry } from "../lib/WorkEntry";

import { Layout } from "../components/Layout";
import { WorkSection } from "../components/work/WorkSection";

interface IProps {
  images: string[];
  entries: WorkEntry[];
}

const WorkLife: NextPage<IProps> = ({ images, entries }) => {
  return (
    <ImagesContext.Provider value={images}>
      <Layout
        header="立花隆の仕事"
        description="立花隆の仕事内容を、2011年を例に紹介しています。"
        path="work-life"
      >
        <Container>
          <Section>
            <p>立花隆の仕事内容を、2011年を例に紹介しています。</p>
          </Section>
          <WorkSection entries={entries} />
        </Container>
      </Layout>
    </ImagesContext.Provider>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const data = (
    await (await import("fs")).promises.readFile("data/2011.csv")
  ).toString();
  const entries = data
    .split("\n")
    .filter(
      (line) =>
        line.length > 0 && line.indexOf("項番,活動時期,活動種類,活動内容") < 0
    )
    .map((line) => {
      const [, , category, title, detail] = line.split(",");
      return {
        category,
        title,
        detail,
      };
    });
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

export default WorkLife;
