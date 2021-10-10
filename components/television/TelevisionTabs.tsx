import { FC, forwardRef } from "react";
import Link from "next/link";
import { Tabs } from "react-bulma-components";

interface IProps {
  activeTab: "index" | "private";
}

const TabsTab: typeof Tabs.Tab = forwardRef((props, ref) => (
  <Tabs.Tab {...props} domRef={ref as any} />
)) as any;

export const TelevisionTabs: FC<IProps> = ({ activeTab }) => (
  <Tabs>
    <Link href="/television" passHref>
      <TabsTab renderAs="a" active={activeTab === "index"}>
        NHKの番組一覧
      </TabsTab>
    </Link>
    <Link href="/television/private" passHref>
      <TabsTab renderAs="a" active={activeTab === "private"}>
        民放の番組一覧
      </TabsTab>
    </Link>
  </Tabs>
);
