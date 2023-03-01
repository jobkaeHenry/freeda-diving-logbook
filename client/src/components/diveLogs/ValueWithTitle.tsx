import { ColumnWrapper } from "@/layouts/Wrapper";
import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import Text from "../atom/Text";

type Props = {
  title: string;
  children: ReactNode | ReactNode[] | undefined;
};

const ValueWithTitle = (props: Props) => {
  const { title, children } = props;
  return children ? (
    <ColumnWrapper
      noGap
      css={css`
        width: 100%;
      `}
    >
      <Text typography={"sub"} color="var(--font-gray)">
        {title}
      </Text>
      <Text typography={"h4"} weight="var(--medium)">
        {children}
      </Text>
    </ColumnWrapper>
  ) : (
    <></>
  );
};

export default ValueWithTitle;
