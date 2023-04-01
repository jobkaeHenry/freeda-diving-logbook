import { getDiveLogPage, newLogPage } from "@/data/URL/local/divelog/url";
import axios from "@/lib/api/axios";
import { ServerSideDiveLogType } from "@/types/DiveLogTypes";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LogsLayout from "@/layouts/newlog/LogsLayout";
import FixedMap from "@/services/GoogleMap/FixedMap";
import Text from "@/components/atom/Text";
import { ColumnWrapper, RowWrapper } from "@/layouts/Wrapper";
import ValueWithTitle from "@/components/diveLogs/ValueWithTitle";
import DepthGraph from "@/features/newlogs/components/DepthGraph";
import AirUsageGraphic from "@/features/divelog/components/AirUsageGraphic";
import Thermometer from "@/features/divelog/components/Thermometer";
import { Button } from "@/components/atom/form/Button";
import useModal from "@/hooks/useModal";
import QRCode from "react-qr-code";
import { Modal } from "@/components/GlobalModal/Modal";
import { freedaBaseURL } from "@/data/URL/local/freedaBaseURL";
import QRModal from "@/features/divelog/components/modal/QRModal";

type Props = {
  data: ServerSideDiveLogType;
  locale: string;
  id: string;
};

const DiveLog = (props: Props) => {
  const { t } = useTranslation("common");
  const { data, id } = props;
  const { location, diveInfo, diveType, weatherInfo, personal } = data;
  const onClickModal = useModal();
  return (
    <LogsLayout>
      <LogsLayout.Main>
        <Modal />
        <Button
          onClick={() =>
            onClickModal(
              <QRModal
                value={`${freedaBaseURL}/${newLogPage}/${id}`}
                author={data.author}
              />
            )
          }
        >
          큐알 공유하기
        </Button>

        <FixedMap lng={location.lng} lat={location.lat} height={"20vh"} />

        <ColumnWrapper noGap>
          <Text typography={"h2"} bold title={location.address}>
            {location.title}
          </Text>
          <Text typography="sub">{diveInfo.time.date}</Text>
        </ColumnWrapper>

        <RowWrapper>
          <ValueWithTitle title={t("입수시간")}>
            {diveInfo.time.in}
          </ValueWithTitle>
          <ValueWithTitle title={t("출수시간")}>
            {diveInfo.time.out}
          </ValueWithTitle>
        </RowWrapper>

        <DepthGraph average={diveInfo.depth.average} max={diveInfo.depth.max} />

        <RowWrapper>
          <Thermometer
            airTemp={weatherInfo.airTemp}
            waterTemp={weatherInfo.waterTemp}
          />
          <AirUsageGraphic airIn={diveInfo.air.in} airOut={diveInfo.air.out} />
        </RowWrapper>

        <RowWrapper>
          <ValueWithTitle title={t("체감수온")}>
            {t(t(personal.waterTemp))}
          </ValueWithTitle>
          <ValueWithTitle title={t("체감시야")}>
            {t(t(weatherInfo.visibility))}
          </ValueWithTitle>
        </RowWrapper>

        <RowWrapper>
          <ValueWithTitle title={t("수트_종류")}>
            {diveInfo.gear.suit.type}
          </ValueWithTitle>
          <ValueWithTitle title={t("두께")}>
            {`${diveInfo.gear.suit.thickness} mm`}
          </ValueWithTitle>
          <ValueWithTitle title={t("웨이트")}>
            {`${diveInfo.gear.weight} kg`}
          </ValueWithTitle>
        </RowWrapper>

        <ValueWithTitle title={"Story"}>{personal.content}</ValueWithTitle>
      </LogsLayout.Main>
    </LogsLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const { locale } = context;

  const { data } = await axios.get<ServerSideDiveLogType>(
    `${getDiveLogPage}/${id}`
  );
  return {
    props: {
      data,
      id,
      ...(await serverSideTranslations(locale ? locale : "ko", ["common"])),
    },
  };
};

export default DiveLog;
