import SectionHeading from '@/components/SectionHeading';
import SelectiveRender from '@/layouts/SelectiveRender';
import styled from '@emotion/styled';
import React from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const FormLayout = (props: Props) => {
  const { children } = props;
  return <>{children}</>;
};

FormLayout.Title = SectionHeading;
FormLayout.Selective = SelectiveRender;

FormLayout.Main = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;
`;

export default FormLayout;
