import React from "react";
import ThermometerSVG from "@/assets/thermometer.svg";
import styled from "@emotion/styled";
import Text from "../../../components/atom/Text";
import { useTranslation } from "react-i18next";
import { ColumnWrapper } from "@/layouts/Wrapper";

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
        <ColumnWrapper noGap>
          <Text typography={"sub"} color={"var(--font-gray)"}>
            {t("기온")}
          </Text>
          <Text typography={"h3"} bold>
            {airTemp}
          </Text>
        </ColumnWrapper>

        <ColumnWrapper noGap>
          <Text typography={"sub"} color={"var(--font-gray)"}>
            {t("수온")}
          </Text>
          <Text typography={"h3"} bold>
            {waterTemp}
          </Text>
        </ColumnWrapper>
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
