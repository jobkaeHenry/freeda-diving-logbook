import React from "react";
import { ColumnWrapper, RowWrapper } from "../layout/Wrapper";
import Text from "@/components/atom/Text";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

type Props = {
  airIn: number;
  airOut: number;
};

const AirIndicator = ({ airIn, airOut }: Props) => {
  const airUsage = airIn - airOut < 0 ? 0 : airIn - airOut;
  const { t } = useTranslation();
  return (
    <ColumnWrapper>
      <div css={IndicatorWrapper}>
        <Text typography={"h3"} weight={"var(--medium)"}>
          {t("총 사용량")}
        </Text>
        <RowWrapper
          css={css`
            margin-right: -1rem;
          `}
        >
          <TotlaAirUsage>{airUsage}</TotlaAirUsage>
          <Text typography="sub" color="var(--font-gray)">
            Bar
          </Text>
        </RowWrapper>
        {airOut < 40 ? (
          <AirUsageComment>
            {t("아슬아슬하게 상승하신거 같아요")}
          </AirUsageComment>
        ) : null}
      </div>
    </ColumnWrapper>
  );
};
const AirUsageComment = styled.span`
  font-size: var(--sub);
  color: var(--font-gray);
`;

const IndicatorWrapper = css`
  align-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TotlaAirUsage = styled.span`
  font-size: 3.5rem;
  font-weight: var(--bold);
  color: var(--font-main);
`;

export default AirIndicator;
