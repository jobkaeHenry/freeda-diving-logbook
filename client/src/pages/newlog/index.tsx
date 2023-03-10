/* eslint-disable react/jsx-key */
import { Button } from "@/components/atom/Button";
import Navbar from "@/components/Navbar/Navbar";
import FixedBottomCTA from "@/layouts/FixedBottomCTA";
import { FormEvent, useCallback, useEffect, useState } from "react";
import PaddingLayout from "@/layouts/PaddingLayout";
import DiveTypeForm from "@/features/newlogs/multistepForm/DiveTypeForm";
import useMultistepForm from "@/hooks/useMultistepForm";

import LocationForm from "@/features/newlogs/multistepForm/LocationForm";
import DepthForm from "@/features/newlogs/multistepForm/DepthForm";
import AirUsageForm from "@/features/newlogs/multistepForm/AirUsageForm";
import GearForm from "@/features/newlogs/multistepForm/GearForm";
import PersonalForm from "@/features/newlogs/multistepForm/PersonalForm";

import scubaDiveModel from "@/features/newlogs/data/scubaDiveModel";
import { DiveLogTypes } from "@/types/DiveLogTypes";

import { useRouter } from "next/router";
import { getDiveLogPage } from "@/data/URL/local/divelog/url";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { createLogServer } from "@/data/URL/server/newlog/createLog";

import React from "react";
import { json } from "stream/consumers";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

// const LocationForm = React.lazy(() => import('@/features/newlogs/pages/LocationForm'));
// const DepthForm = React.lazy(() => import('@/features/newlogs/pages/DepthForm'));
// const AirUsageForm = React.lazy(() => import('@/features/newlogs/pages/AirUsageForm'));
// const GearForm = React.lazy(() => import('@/features/newlogs/pages/GearForm'));
// const PersonalForm = React.lazy(() => import('@/features/newlogs/pages/PersonalForm'));

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale;
  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "common",
        "diveForm",
      ])),
      locale,
    },
  };
}

type Props = { existingData?: DiveLogTypes; locale?: string };

const DiveForm = ({ existingData }: Props) => {
  const [data, setData] = useState(
    existingData ? existingData : scubaDiveModel
  );
  const { t } = useTranslation();
  const router = useRouter();
  const axiosPrivate = useAxiosPrivate();

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
    // ??????????????? ?????? ???????????? ?????????, ?????????????????? ???????????? ??????
    existingData ? 3 : 0
  );

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (isLastStep) {
        axiosPrivate
          .post(createLogServer, data)
          .then((res) => {
            router.replace(`${getDiveLogPage}/${res.data.id}`);
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });
      }
      next();
    },
    [isLastStep]
  );

  return (
    <>
      <Navbar />
      <PaddingLayout>
        <form onSubmit={onSubmit}>
          {/* ?????? ??? */}
          {step}
          {/* ?????? */}
          <FixedBottomCTA>
            {!isFirstStep ? (
              <Button rounded className="ghost" onClick={back}>
                {t("??????")}
              </Button>
            ) : (
              <></>
            )}
            <Button type="submit" rounded>
              {isLastStep ? t("??????") : t("??????")}
            </Button>
          </FixedBottomCTA>
        </form>
      </PaddingLayout>
    </>
  );
};

export default DiveForm;
