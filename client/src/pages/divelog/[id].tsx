import { getDiveLog } from "@/data/URL/local/divelog/url";
import axios from "@/lib/api/axios";
import { ServerSideDiveLogType } from "@/types/DiveLogTypes";

import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// export async function getStaticProps({ locale }: { locale: string }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }

type Props = {
  data: ServerSideDiveLogType;
  locale: string;
};

const DiveLog = (props: Props) => {
  const { t } = useTranslation("common");
  const { data } = props;
  return (
    <div>
      <div>
        {`${t("입수잔압")} 
        ${data.diveInfo.air.in}`}
      </div>
      <div>
        {`${t("출수잔압")} 
        ${data.diveInfo.air.out}`}
      </div>
      <div>{`${t("장소")} ${data.location.title}`}</div>
      <div>{`${t("주소")} ${data.location.address}`}</div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const { locale } = context;
  const { data } = await axios.get<ServerSideDiveLogType>(
    `${getDiveLog}/${id}`
  );
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale ? locale : "ko", ["common"])),
    },
  };
};

export default DiveLog;
