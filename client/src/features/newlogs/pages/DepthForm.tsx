import Radio from "@/components/atom/Radio";
import Text from "@/components/atom/Text";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import React, { useState } from "react";
import FormLayout from "../layout/FormLayout";

type Props = Pick<DiveLogTypes, "diveInfo"> & {
  updateFields: (field: Pick<DiveLogTypes, "diveInfo">) => void;
};

const DepthForm = ({diveInfo}: Props) => {

  return (
    <FormLayout>
      {/* 타이틀 */}
      <FormLayout.Title>
        <Text typography="h1" bold as={"h1"}>
          수심
        </Text>
      </FormLayout.Title>
      {/* 메인 */}
      <FormLayout.Main>
        <input type="number" required defaultValue={diveInfo.depth.average}/>
        <input type="number" required defaultValue={diveInfo.depth.max}/>
      </FormLayout.Main>
    </FormLayout>
  );
};

export default DepthForm;
