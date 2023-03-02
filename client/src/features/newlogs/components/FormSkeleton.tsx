import Skeleton from "@/components/atom/Skeleton";
import { ColumnWrapper, RowWrapper } from "@/layouts/Wrapper";
import React from "react";

type Props = {};

const FormSkeleton = (props: Props) => {
  return (
    <ColumnWrapper>
      <Skeleton width="200px" height="30px" />
      <Skeleton width="100px" height="24px" />
      <Skeleton width="100%" height="36px" />
      <RowWrapper>
        <ColumnWrapper>
          <Skeleton width="50px" height="24px" />
          <Skeleton width="50%" height="30px" />
        </ColumnWrapper>
        <ColumnWrapper>
          <Skeleton width="50px" height="24px" />
          <Skeleton width="50%" height="30px" />
        </ColumnWrapper>
      </RowWrapper>
    </ColumnWrapper>
  );
};

export default FormSkeleton;
