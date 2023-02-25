import Radio from "@/components/atom/Radio";
import Text from "@/components/atom/Text";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import { ValueOf } from "next/dist/shared/lib/constants";
import React, { ChangeEvent, useState } from "react";
import FormLayout from "../layout/FormLayout";

type Props = Pick<DiveLogTypes, "diveType"> & {
  updateFields: (field: Pick<DiveLogTypes, "diveType">) => void;
};

const DiveTypeForm = (props: Props) => {
  return (
    <FormLayout>
      {/* 타이틀 */}
      <FormLayout.Title>
        <Text typography="h1" bold as={"h1"}>
          어떤 활동을 하셨나요?
        </Text>
      </FormLayout.Title>
      {/* 메인 */}
      <FormLayout.Main>
        <Radio
          onChange={(e) => {
            if (e.target.value === "scuba" || e.target.value === "free") {
              props.updateFields({ diveType: e.target.value });
            }
          }}
          value={props.diveType}
        >
          <Radio.Option value={"scuba"}>스쿠버다이빙</Radio.Option>
          <Radio.Option value={"free"}>프리다이빙</Radio.Option>
        </Radio>
      </FormLayout.Main>
    </FormLayout>
  );
};

export default DiveTypeForm;
