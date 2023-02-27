import TextInput from "@/components/atom/TextInput";
import React, { InputHTMLAttributes } from "react";
import Text from "@/components/atom/Text";
import { RowWrapper } from "../../features/newlogs/layout/Wrapper";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  unit?: string;
  inputWidth?: string;
  label: string;
};

const InputWithLabel = (props: Props) => {
  const { unit, label, inputWidth, ...otherProps } = props;
  return (
    <LabelWrapper>
      <Text typography="h4" weight="var(--medium)">
        {label}
      </Text>
      <RowWrapper>
        <TextInput
          {...otherProps}
          css={css`
            font-size: var(--h4);
            font-weight: var(--bold);
          `}
          width={inputWidth ? inputWidth : "40%"}
        />
        <Text typography="p" color="var(--font-gray)">
          {unit}
        </Text>
      </RowWrapper>
    </LabelWrapper>
  );
};

const LabelWrapper = styled.label`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

export default InputWithLabel;
