import SectionHeading from "@/components/SectionHeading";
import React from "react";
import PaddingLayout from "./PaddingLayout";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const FormLayout = (props: Props) => {
  const { children } = props;
  return <>{children}</>;
};

FormLayout.Title = SectionHeading;
FormLayout.Main = React.Fragment

export default FormLayout;
