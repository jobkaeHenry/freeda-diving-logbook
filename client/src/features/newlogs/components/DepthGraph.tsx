import React from "react";
import DepthGraphSVG from "@/assets/depthGraph.svg";
import styled from "@emotion/styled";
import Text from "@/components/atom/Text";
import { useTranslation } from "react-i18next";
import { ColumnWrapper } from "../../../layouts/Wrapper";
import { css } from "@emotion/react";
import ValueWithTitle from "@/components/diveLogs/ValueWithTitle";

type Props = {
  average: number;
  max: number;
};

const DepthGraph = ({ average, max }: Props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <DepthGraphSVG />

      <ColumnWrapper>
        <ValueWithTitle title={t("평균수심")}>{`${average}m`}</ValueWithTitle>
        <ValueWithTitle title={t("최대수심")}>{`${max}m`}</ValueWithTitle>
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
