import { Button } from '@/components/atom/form/Button';
import FixedBottomCTA from '@/layouts/FixedBottomCTA';
import { FormEvent, useCallback, useState } from 'react';
import PaddingLayout from '@/layouts/PaddingLayout';
import DiveTypeForm from '@/features/newlogs/multistepForm/DiveTypeForm';
import useMultistepForm from '@/hooks/useMultistepForm';
import LocationForm from '@/features/newlogs/multistepForm/LocationForm';
import DepthForm from '@/features/newlogs/multistepForm/DepthForm';
import AirUsageForm from '@/features/newlogs/multistepForm/AirUsageForm';
import GearForm from '@/features/newlogs/multistepForm/GearForm';
import PersonalForm from '@/features/newlogs/multistepForm/PersonalForm';
import scubaDiveModel from '@/features/newlogs/data/scubaDiveModel';
import { DiveLogTypes } from '@/types/DiveLogTypes';
import { useRouter } from 'next/router';
import { getDiveLogPage } from '@/data/URL/local/divelog/url';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { createLogServer } from '@/data/URL/server/newlog/createLog';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import Navbar from '@/components/Navigation/Navbar';
import Head from 'next/head';

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale;
  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : 'en', [
        'common',
        'diveForm',
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
      <DiveTypeForm {...data} updateFields={updateField} key={"DiveTypeForm"}/>,
      <LocationForm {...data} updateFields={updateField} key={"LocationForm"}/>,
      <DepthForm {...data} updateFields={updateField} key={"DepthForm"}/>,
      <AirUsageForm {...data} updateFields={updateField} key={"AirUsageForm"}/>,
      <GearForm {...data} updateFields={updateField} key={"GearForm"}/>,
      <PersonalForm {...data} updateFields={updateField} key={"PersonalForm"}/>,
    ],
    // 서버측에서 받은 데이터가 있다면, 커스터마이징 부분으로 넘김
    existingData ? 3 : 0
  );

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (isLastStep) {
        axiosPrivate
          .post(createLogServer, data)
          .then((res) => {
            router.replace(`${getDiveLogPage}/${res.data.id}`);
          })
          .catch((err) => {
            console.log(err?.response?.data?.message);
          });
      }
      next();
    },
    [isLastStep]
  );

  return (
    <>
    <Head>
      <title>Freeda | 새 로그</title>
    </Head>
      <Navbar />
      <PaddingLayout>
        <form onSubmit={onSubmit}>
          {/* 실제 폼 */}
          {step}
          {/* 버튼 */}
          <FixedBottomCTA>
            {!isFirstStep ? (
              <Button rounded variant='ghost' onClick={back}>
                {t('이전')}
              </Button>
            ) : (
              <></>
            )}
            <Button type='submit' rounded>
              {isLastStep ? t('완료') : t('다음')}
            </Button>
          </FixedBottomCTA>
        </form>
      </PaddingLayout>
    </>
  );
};

export default DiveForm;
