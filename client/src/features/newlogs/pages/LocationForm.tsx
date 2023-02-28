import Radio from "@/components/atom/Radio";
import Text from "@/components/atom/Text";
import TextInput from "@/components/atom/TextInput";
import SearchIcon from "@/assets/searchIcon.svg";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import { useTranslation } from "react-i18next";
import FormLayout from "../layout/FormLayout";
import { WeatherTypeGuard } from "../utils/typeguard";
import useModal from "@/hooks/useModal";
import { Modal } from "@/components/GlobalModal/Modal";
import LocationModal from "../components/LocationModal";
import InputWithLabel from "../../../components/form/InputWithLabel";
import { RowWrapper } from "../layout/Wrapper";

type Props = Pick<DiveLogTypes, "location" | "weatherInfo" | "diveInfo"> & {
  updateFields: (
    field: Pick<DiveLogTypes, "location" & "diveInfo" & "weatherInfo">
  ) => void;
};

const LocationForm = ({
  location,
  weatherInfo,
  diveInfo,
  updateFields,
}: Props) => {
  const { t } = useTranslation(["diveForm", "common"]);
  const onClickModal = useModal();

  return (
    <FormLayout>
      {/* 타이틀 */}
      <FormLayout.Title>
        <Text typography="h1" bold as={"h1"}>
          {t("어디에서 활동하셨나요?")}
        </Text>
      </FormLayout.Title>
      {/* 메인 */}
      <FormLayout.Main>
        <Modal />
        <TextInput
          icon={SearchIcon}
          type="text"
          required
          placeholder={t("common:검색하기") || "Search"}
          defaultValue={location.title}
          onFocus={() =>
            onClickModal(<LocationModal currentValue={location.title} />)
          }
          // onChange={(e) =>
          //   updateFields({ location: { ...location, title: e.target.value } })
          // }
        />
        <Radio
          value={weatherInfo.weather}
          onChange={(e) => {
            updateFields({
              weatherInfo: { ...weatherInfo, weather: WeatherTypeGuard(e) },
            });
          }}
        >
          <Radio.Option value={"sun"}>{t("common:맑음")}</Radio.Option>
          <Radio.Option value={"fog"}>{t("common:흐림")}</Radio.Option>
          <Radio.Option value={"rain"}>{t("common:비")}</Radio.Option>
          <Radio.Option value={"snow"}>{t("common:눈")}</Radio.Option>
        </Radio>

        <RowWrapper>
          <InputWithLabel
            onChange={(e) => {
              updateFields({
                diveInfo: {
                  ...diveInfo,
                  time: { ...diveInfo.time, in: e.target.value },
                },
              });
            }}
            type={"time"}
            label={t("common:입수시간")}
            inputWidth={"100%"}
            required
            defaultValue={diveInfo.time.in}
          />
          <InputWithLabel
            type={"time"}
            label={t("common:출수시간")}
            inputWidth={"100%"}
            onChange={(e) => {
              updateFields({
                diveInfo: {
                  ...diveInfo,
                  time: { ...diveInfo.time, out: e.target.value },
                },
              });
            }}
            required
            defaultValue={diveInfo.time.out}
          />
        </RowWrapper>

        <RowWrapper>
          <InputWithLabel
            type={"number"}
            label={`${t("common:수온")}`}
            unit="℃"
            defaultValue={weatherInfo.waterTemp}
            onChange={(e) => {
              updateFields({
                weatherInfo: { ...weatherInfo, waterTemp:Number(e.target.value) },
              });
            }}
          />
          <InputWithLabel
            type={"number"}
            label={`${t("common:기온")}`}
            unit="℃"
            onChange={(e) => {
              updateFields({
                weatherInfo: { ...weatherInfo, airTemp:Number(e.target.value) },
              });
            }}
            defaultValue={weatherInfo.airTemp}
          />
        </RowWrapper>
      </FormLayout.Main>
    </FormLayout>
  );
};

export default LocationForm;
