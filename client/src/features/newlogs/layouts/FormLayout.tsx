import SectionHeading from "@/components/SectionHeading";
import styled from "@emotion/styled";
import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const FormLayout = (props: Props) => {
  const { children } = props;
  return <>{children}</>;
};
interface SelectiveInterface extends Props {
  validation: boolean;
}
/**
 * true 혹은 false 를 받아 true인 조건에서 Children 컴포넌트를 랜더해주는 HOC컴포넌트
 * @param validation trueish / falsy 값
 * @param children 보여줄 컴포넌트
 * @returns True : 파라미터로 받은 Children / False : React.Fragment
 */
const SelectiveRender = ({ validation, children }: SelectiveInterface) => {
  return validation ? {children} : <></>;
};

FormLayout.Title = SectionHeading;
FormLayout.Selective = SelectiveRender

FormLayout.Main = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;
`;

export default FormLayout;
