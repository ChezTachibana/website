import { FC, forwardRef } from "react";
import Link from "next/link";
import { Tabs } from "react-bulma-components";

interface IProps {
  activeTab: "index" | "title-only";
}

const TabsTab: typeof Tabs.Tab = forwardRef((props, ref) => (
  <Tabs.Tab {...props} domRef={ref as any} />
)) as any;

export const PublicationTabs: FC<IProps> = ({ activeTab }) => (
  <Tabs>
    <Link href="/publication" passHref>
      <TabsTab renderAs="a" active={activeTab === "index"}>
        タイトルと書影
      </TabsTab>
    </Link>
    <Link href="/publication/title-only" passHref>
      <TabsTab renderAs="a" active={activeTab === "title-only"}>
        タイトルのみ
      </TabsTab>
    </Link>
  </Tabs>
);
