import { FC } from "react";
import Link from "next/link";
import { Button } from "react-bulma-components";

interface IProps {
  href: string;
  mt?: number;
  rightAligned?: boolean;
}

export const LinkButton: FC<IProps> = (props) => {
  const { href, rightAligned } = props;
  const props_ = { ...props };
  delete props_.rightAligned;
  return (
    <Link href={href}>
      <>
        <Button renderAs="a" ml={rightAligned ? 2 : undefined} {...props_} />
      </>
    </Link>
  );
};
