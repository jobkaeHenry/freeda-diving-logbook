import React from "react";
import ThermometerSVG from "@/assets/thermometer.svg";
import styled from "@emotion/styled";
import Text from "../../../components/atom/Text";
import { useTranslation } from "react-i18next";
import { ColumnWrapper } from "@/layouts/Wrapper";
import ValueWithTitle from "@/components/diveLogs/ValueWithTitle";

type Props = {
  airTemp: number;
  waterTemp: number;
};

const Thermometer = ({ airTemp, waterTemp }: Props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <ThermometerSVG />

      <ColumnWrapper>
        <ValueWithTitle title={t("기온")}>{airTemp}</ValueWithTitle>
        <ValueWithTitle title={t("수온")}>{waterTemp}</ValueWithTitle>
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

export default Thermometer;
