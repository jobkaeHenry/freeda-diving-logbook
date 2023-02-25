import Radio from "@/components/atom/Radio";
import Text from "@/components/atom/Text";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import React, { useState } from "react";
import FormLayout from "../layout/FormLayout";

type Props = Pick<DiveLogTypes, "location"> & {
  updateFields: (field: Pick<DiveLogTypes, "location">) => void;
};

const LocationForm = ({ location, updateFields }: Props) => {

  return (
    <FormLayout>
      {/* 타이틀 */}
      <FormLayout.Title>
        <Text typography="h1" bold as={"h1"}>
          어디에서 활동하셨나요?
        </Text>
      </FormLayout.Title>
      {/* 메인 */}
      <FormLayout.Main>
        <input
          type="text"
          required
          defaultValue={location.title}
          onChange={(e) =>
            updateFields({ location: { ...location, title: e.target.value } })
          }
        />
      </FormLayout.Main>
    </FormLayout>
  );
};

export default LocationForm;
