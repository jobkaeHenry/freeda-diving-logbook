import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { InputHTMLAttributes } from "react";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: any;
  width?: string;
}

const TextInput = (props: Props) => {
  const Icon = props.icon;
  return (
    <InputWrapper
      css={css`
        position: relative;
        width: ${props.width};
      `}
    >
      <Input type={"text"} {...props} />
      {Icon ? (
        <Icon
          css={css`
            position: absolute;
            right: 8px;
          `}
          onClick={props.onClick}
        />
      ) : (
        <></>
      )}
    </InputWrapper>
  );
};

const Input = styled.input`
  &{
    padding: 16px;
    padding-right: ${(props: Props) => (props.icon ? "48px" : "")};
    outline-style: solid;
    outline-width: 1px;
    width: 100%;
    outline-color: var(--line-gray);
    border-radius: 6px;
    resize: none;
    accent-color: var(--main);
  }
  &:disabled {
    background-color: #eee;
    color: var(--font-light-gray);
  }
  &:focus {
    filter: drop-shadow(0px 0px 2px var(--main));
    color: var(--font-main);
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default TextInput;
