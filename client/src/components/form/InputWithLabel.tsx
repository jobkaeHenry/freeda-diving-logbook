import TextInput, { TextInputProp } from "@/components/atom/TextInput";
import Text from "@/components/atom/Text";
import { RowWrapper } from "../../layouts/Wrapper";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

type InputWithLabelProps = TextInputProp & {
  unit?: string;
  inputWidth?: string;
  label: string;
  validation?: boolean;
};

const InputWithLabel = (props: InputWithLabelProps) => {
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
