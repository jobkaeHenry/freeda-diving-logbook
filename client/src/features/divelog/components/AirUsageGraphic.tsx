import React from "react";
import AirUsageIndicator from "@/assets/airUsageIndicator.svg";
import styled from "@emotion/styled";
import Text from "../../../components/atom/Text";
import { useTranslation } from "react-i18next";
import { ColumnWrapper } from "@/layouts/Wrapper";

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
        <ColumnWrapper noGap>
          <Text typography={"sub"} color={"var(--font-gray)"}>
            {t("입수잔압")}
          </Text>
          <Text typography={"h3"} bold>{airIn}</Text>
        </ColumnWrapper>

        <ColumnWrapper noGap>
          <Text typography={"sub"} color={"var(--font-gray)"}>
            {t("출수잔압")}
          </Text>
          <Text typography={"h3"} bold>{airOut}</Text>
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

export default AirIsageGraphic;
