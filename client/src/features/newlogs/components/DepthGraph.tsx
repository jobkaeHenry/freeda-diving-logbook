import React from "react";
import DepthGraphSVG from "@/assets/depthGraph.svg";
import styled from "@emotion/styled";
import Text from "@/components/atom/Text";
import { useTranslation } from "react-i18next";
import { ColumnWrapper } from "../layout/Wrapper";
import { css } from "@emotion/react";

type Props = {
  average: number;
  max: number;
};

const DepthGraph = ({ average, max }: Props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <DepthGraphSVG/>

      <ColumnWrapper >
        <ColumnWrapper noGap>
          <Text typography={"sub"} color={"var(--font-gray)"}>
            {t("평균수심")}
          </Text>
          <Text typography={"h3"} bold>{`${average}m`}</Text>
        </ColumnWrapper>

        <ColumnWrapper noGap>
          <Text typography={"sub"} color={"var(--font-gray)"}>
            {t("최대수심")}
          </Text>
          <Text typography={"h3"} bold>{`${max}m`}</Text>
        </ColumnWrapper>
      </ColumnWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export default DepthGraph;
