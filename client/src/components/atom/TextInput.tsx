import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { InputHTMLAttributes } from "react";
import Icon from "./Icon";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: any;
}

const TextInput = (props: Props) => {
  const Icon = props.icon;
  return (
    <InputWrapper css={css`position:relative;`}>
      <Input
        css={css`
          padding-right: 32px;
        `}
        {...props}
      />
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
  &[type="text"] {
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
  &[type="text"]:disabled {
    background-color: #eee;
    color: var(--font-light-gray);
  }
  &[type="text"]:focus {
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
