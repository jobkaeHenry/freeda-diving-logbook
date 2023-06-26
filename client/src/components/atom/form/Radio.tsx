import React, {
  ChangeEvent,
  cloneElement,
  ComponentProps,
  InputHTMLAttributes,
  ReactElement,
  useCallback,
  useState,
} from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { uid } from "react-uid";
import { css } from "@emotion/react";

interface Props
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "defaultValue" | "onChange" | "name"
  > {
  children: ReactElement<ComponentProps<typeof RadioOption>>[];
}

const Radio = (props: Props) => {
  const { children, ...otherProps } = props;
  const [value, setValue] = useState(props.defaultValue);

  const uncontrolled = props.value == null;
  return (
    <ControlledRadio
      {...otherProps}
      value={uncontrolled ? value : props.value}
      onChange={(event) => {
        props.onChange?.(event);
        if (uncontrolled) {
          setValue(event.target.value);
        }
      }}
    >
      {children}
    </ControlledRadio>
  );
};

const ControlledRadio = ({ children, value, onChange, name }: Props) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
    },
    [onChange]
  );
  const id = uid('radio');
  const checkedIndex = children.findIndex((e) => e.props.value === value);

  return (
    <RadioWrapper>
      {children.map((element, index) => {
        return cloneElement(element, {
          key: index,
          onChange: handleChange,
          checked: value === element.props.value,
          value: element.props.value,
          name: name ?? id,
        });
      })}
      <motion.div
        css={selectedBox}
        initial={{ translateX: `${checkedIndex * 100}%` }}
        animate={{
          translateX: `${checkedIndex * 100}%`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
        style={{ width: `calc((100% - 8px) / ${children.length})` }}
      ></motion.div>
    </RadioWrapper>
  );
};

const selectedBox = css`
  background-color: var(--pure-white);
  border-radius: 8px;
  position: absolute;
  width: 50%;
  top: 4px;
  left: 4px;
  z-index: 0;
  bottom: 4px;
`;

interface RadioOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

const RadioOption = ({
  value,
  name,
  checked,
  onChange,
  children,
  ...others
}: RadioOptionProps) => {
  return (
    <RadioLabel>
      <input
        type={"radio"}
        className={"visually-none"}
        checked={checked}
        name={name}
        value={value}
        onChange={onChange}
        {...others}
      />
      <span>{children}</span>
    </RadioLabel>
  );
};

const RadioLabel = styled.label`
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-weight: var(--medium);
  cursor: pointer;

  & > span {
    color: var(--font-gray);
  }

  & input:checked + span {
    font-weight: var(--bold);
    color: var(--font-black);
  }
`;

const RadioWrapper = styled.div`
  padding: 4px;
  border-radius: 8px;
  background-color: var(--bg-light);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

Radio.Option = RadioOption;
export default Radio;
