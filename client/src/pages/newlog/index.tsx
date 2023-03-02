/* eslint-disable react/jsx-key */
import { Button } from "@/components/atom/Button";
import Navbar from "@/components/Navbar/Navbar";
import FixedBottomCTA from "@/layouts/FixedBottomCTA";
import { FormEvent, useCallback, useState } from "react";
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
import axios, { axiosPrivate } from "@/lib/api/axios";

import { useRouter } from "next/router";
import { getDiveLog } from "@/data/URL/local/divelog/url";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { createLogServer } from "@/data/URL/server/newlog/createLog";

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale;
  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "common",
        "diveForm",
      ])),
      locale
    },
  };
}

type Props = { existingData?: DiveLogTypes, locale?:string };

const DiveForm = ({ existingData }: Props) => {
  const [data, setData] = useState(
    existingData ? existingData : scubaDiveModel
  );
  const { t } = useTranslation();
  const router = useRouter();

  const updateField = useCallback((field: Partial<DiveLogTypes>) => {
    setData((prev) => {
      return { ...prev, ...field };
    });
  }, []);

  const { step, isFirstStep, next, back, isLastStep } = useMultistepForm(
    [
      <DiveTypeForm {...data} updateFields={updateField} />,
      <LocationForm {...data} updateFields={updateField} />,
      <DepthForm {...data} updateFields={updateField} />,
      <AirUsageForm {...data} updateFields={updateField} />,
      <GearForm {...data} updateFields={updateField} />,
      <PersonalForm {...data} updateFields={updateField} />,
    ],
    existingData ? 3 : 0
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isLastStep) {
      axios.post(createLogServer, data).then((res) => {
      // axiosPrivate.post(createLog, data).then((res) => {
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
                {t("이전")}
              </Button>
            ) : (
              <></>
            )}
            <Button type="submit" rounded>
              {isLastStep ? t("완료") : t("다음")}
            </Button>
          </FixedBottomCTA>
        </form>
      </PaddingLayout>
    </>
  );
};

export default DiveForm;
