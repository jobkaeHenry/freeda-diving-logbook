import { DiveLogTypes, ServerSideDiveLogType } from "@/types/DiveLogTypes";
import axios from "@/lib/api/axios";
import { getDiveLogPage } from "@/data/URL/local/divelog/url";
import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import DiveForm from ".";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {locale} = context;
  // 오버 패칭정보 제거
  const { id, _id, __v, author, ...data } = (
    await axios.get<ServerSideDiveLogType>(
      `${getDiveLogPage}/${context.query?.id}`
    )
  ).data;
  
  data.personal.content=""

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "common",
        "diveForm",
      ])),
      locale,
      existingData: data,
    },
  };
}
type Props = {
  existingData: DiveLogTypes;
  locale: string;
};

const CreateDiveFormByExistingData = ({ existingData }: Props) => {
  return <DiveForm existingData={existingData} />;
};

export default CreateDiveFormByExistingData;
