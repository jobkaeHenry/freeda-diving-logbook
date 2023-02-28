import FileInput from "@/components/atom/FileInput";
import Radio from "@/components/atom/Radio";
import Text from "@/components/atom/Text";
import TextArea from "@/components/atom/TextArea";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import { useTranslation } from "react-i18next";
import FormLayout from "../layout/FormLayout";

type Props = Pick<DiveLogTypes, "personal" | "weatherInfo"> & {
  updateFields: (field: Pick<DiveLogTypes, "personal" & "weatherInfo">) => void;
};

const GearForm = ({ personal, weatherInfo, updateFields }: Props) => {
  const { t } = useTranslation(["diveForm", "common"]);
  return (
    <FormLayout>
      {/* 타이틀 */}
      <FormLayout.Title>
        <Text typography="h1" bold as={"h1"}>
          {t("다이빙은 어떠셨나요?")}
        </Text>
      </FormLayout.Title>
      {/* 메인 */}
      <FormLayout.Main>
        {/* <FileInput label="사진" 
        onChange={(e)=>{
          updateFields({
            personal: {
              ...personal,
              image: e.target.files[0],
            },
          });
        }}/> */}
        <TextArea
          onBlur={(e) => {
            updateFields({
              personal: {
                ...personal,
                content: e.target.value,
              },
            });
          }}
          defaultValue={personal.content}
          height={"20vh"}
          autoFocus
          placeholder={String(t("다이빙은 어떠셨나요?"))}
        />

        <Text typography={"h4"} weight={"var(--medium)"}>
          {t("common:체감시야")}
        </Text>
        <Radio
          value={weatherInfo.visibility}
          onChange={(e) => {
            updateFields({
              weatherInfo: {
                ...weatherInfo,
                visibility: e.target.value,
              },
            });
          }}
        >
          <Radio.Option value={"good"}>{t("common:좋음")}</Radio.Option>
          <Radio.Option value={"normal"}>{t("common:보통")}</Radio.Option>
          <Radio.Option value={"bad"}>{t("common:나쁨")}</Radio.Option>
        </Radio>

        <Text typography={"h4"} weight={"var(--medium)"}>
          {t("common:체감수온")}
        </Text>

        <Radio
          value={personal.waterTemp}
          onChange={(e) => {
            updateFields({
              personal: {
                ...personal,
                waterTemp: e.target.value,
              },
            });
          }}
        >
          <Radio.Option value={"warm"}>{t("common:적당함")}</Radio.Option>
          <Radio.Option value={"cold"}>{t("common:추움")}</Radio.Option>
          <Radio.Option value={"hot"}>{t("common:더움")}</Radio.Option>
        </Radio>
      </FormLayout.Main>
    </FormLayout>
  );
};

export default GearForm;
