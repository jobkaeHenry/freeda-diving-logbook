/* eslint-disable react/jsx-key */
import { Button } from "@/components/atom/Button";
import Navbar from "@/components/Navbar/Navbar";
import FixedBottomCTA from "@/layouts/FixedBottomCTA";

import React, { FormEvent, MouseEventHandler, useState } from "react";
import PaddingLayout from "@/features/newlogs/layout/PaddingLayout";
import DiveTypeForm from "@/features/newlogs/pages/DiveTypeForm";
import useMultistepForm from "@/hooks/useMultistepForm";
import LocationForm from "@/features/newlogs/pages/LocationForm";
import DepthForm from "@/features/newlogs/pages/DepthForm";
import AirUsageForm from "@/features/newlogs/pages/AirUsageForm";
import GearForm from "@/features/newlogs/pages/GearForm";
import PersonalForm from "@/features/newlogs/pages/PersonalForm";
import scubaDiveModel from "@/features/newlogs/data/scubaDiveModel";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import { axiosPrivate } from "@/lib/api/axios";
import { createLog } from "@/features/newlogs/data/URL/newLogs";
import { useRouter } from "next/router";
import { getDiveLog } from "@/data/URL/local/divelog/url";

type Props = {};

const DiveForm = (props: Props) => {
  const [data, setData] = useState(scubaDiveModel);
  const router = useRouter();
  const updateField = (field: Partial<DiveLogTypes>) => {
    setData((prev) => {
      return { ...prev, ...field };
    });
  };

  const {
    step,
    currentIndex,
    isFirstStep,
    next,
    back,
    totalPageNum,
    isLastStep,
  } = useMultistepForm([
    <DiveTypeForm {...data} updateFields={updateField} />,
    <LocationForm {...data} updateFields={updateField} />,
    <DepthForm {...data} updateFields={updateField} />,
    <AirUsageForm {...data} updateFields={updateField} />,
    <GearForm {...data} updateFields={updateField} />,
    <PersonalForm {...data} updateFields={updateField} />,
  ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isLastStep) {
      console.log(data);
      axiosPrivate.post(createLog, data).then((res) => {
        console.log(res);
        router.replace(`/${getDiveLog}/${res.data.id}`);
      });
    }
    next();
  };

  return (
    <>
      <Navbar />
      <PaddingLayout>
        <form onSubmit={onSubmit}>
          {/* 실제 폼 */}
          {step}
          {/* 버튼 */}
          <FixedBottomCTA>
            {!isFirstStep ? (
              <Button rounded className="ghost" onClick={back}>
                이전
              </Button>
            ) : (
              <></>
            )}
            <Button type="submit" rounded>
              다음
            </Button>
          </FixedBottomCTA>
        </form>
      </PaddingLayout>
    </>
  );
};

export default DiveForm;
