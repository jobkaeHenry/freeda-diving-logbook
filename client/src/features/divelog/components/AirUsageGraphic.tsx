import React from "react";
import AirUsageIndicator from "@/assets/airUsageIndicator.svg";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { ColumnWrapper } from "@/layouts/Wrapper";
import ValueWithTitle from "@/components/diveLogs/ValueWithTitle";

type Props = {
  airIn: number;
  airOut: number;
};

const AirIsageGraphic = ({ airIn, airOut }: Props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <AirUsageIndicator />
      <ColumnWrapper>
        <ValueWithTitle title={t("입수잔압")}>{`${airIn} Bar`}</ValueWithTitle>
        <ValueWithTitle title={t("출수잔압")}>{`${airOut} Bar`}</ValueWithTitle>
      </ColumnWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 16px;
`;

export default AirIsageGraphic;
