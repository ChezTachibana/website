import { GetStaticProps, NextPage } from "next";
import { Container, Heading, Section } from "react-bulma-components";

import biography from "../data/biography.json";
import { listImages } from "../lib/listImages";
import ImagesContext from "../lib/ImagesContext";

import { Layout } from "../components/Layout";
import { BiographyBox } from "../components/biography/BiographyBox";

interface IProps {
  images: string[];
}

const Biography: NextPage<IProps> = ({ images }) => {
  return (
    <ImagesContext.Provider value={images}>
      <Layout
        header="職歴"
        description="立花隆の職歴、委員歴、受賞歴などを掲載しています。"
        path="biography"
      >
        <Container>
          <Section>
            <p>立花隆の職歴、委員歴、受賞歴などを掲載しています。</p>
          </Section>
          <Section id="affiliations">
            <Heading>職歴</Heading>
            <BiographyBox roles={biography.affiliations} />
          </Section>
          <Section id="committees">
            <Heading>委員歴</Heading>
            <BiographyBox roles={biography.committees} />
          </Section>
          <Section id="awards">
            <Heading>受賞歴</Heading>
            <BiographyBox roles={biography.awards} />
          </Section>
          <Section id="members">
            <Heading>会員歴</Heading>
            <BiographyBox roles={biography.members} />
          </Section>
          <Section id="educations">
            <Heading>学歴</Heading>
            <BiographyBox roles={biography.educations} />
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

export default Biography;
