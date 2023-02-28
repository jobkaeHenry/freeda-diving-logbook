import Radio from "@/components/atom/Radio";
import Text from "@/components/atom/Text";
import InputWithLabel from "@/components/form/InputWithLabel";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import { useTranslation } from "next-i18next";
import FormLayout from "../layout/FormLayout";
import { RowWrapper } from "../layout/Wrapper";

type Props = Pick<DiveLogTypes, "diveInfo"> & {
  updateFields: (field: Pick<DiveLogTypes, "diveInfo">) => void;
};

const GearForm = ({ diveInfo, updateFields }: Props) => {
  const { t } = useTranslation(["diveForm", "common"]);
  return (
    <FormLayout>
      {/* 타이틀 */}
      <FormLayout.Title>
        <Text typography="h1" bold as={"h1"}>
          {t("어떤 장비를 사용하셨나요?")}
        </Text>
      </FormLayout.Title>
      {/* 메인 */}
      <FormLayout.Main>
        <Text typography={"h4"} weight={"var(--medium)"}>
          {t(`common:수트_종류`)}
        </Text>

        <Radio
          value={diveInfo.gear.suit.type}
          onChange={(e) => {
            if (
              e.target.value === "wet" ||
              e.target.value === "semi" ||
              e.target.value === "dry" ||
              e.target.value === "skin"
            )
              updateFields({
                diveInfo: {
                  ...diveInfo,
                  gear: {
                    ...diveInfo.gear,
                    suit: {
                      ...diveInfo.gear.suit,
                      type: e.target.value,
                    },
                  },
                },
              });
          }}
        >
          <Radio.Option value={"wet"}>{t("Wet")}</Radio.Option>
          <Radio.Option value={"semi"}>{t("Semi")}</Radio.Option>
          <Radio.Option value={"dry"}>{t("Dry")}</Radio.Option>
          <Radio.Option value={"skin"}>{t("Skin")}</Radio.Option>
        </Radio>

        <RowWrapper>
          <InputWithLabel
            type={"number"}
            defaultValue={diveInfo.gear.suit.thickness}
            label={t("common:두께")}
            onChange={(e) => {
              updateFields({
                diveInfo: {
                  ...diveInfo,
                  gear: {
                    ...diveInfo.gear,
                    suit: {
                      ...diveInfo.gear.suit,
                      thickness: Number(e.target.value),
                    },
                  },
                },
              });
            }}
            inputWidth={"30%"}
            unit={"mm"}
          />
          <InputWithLabel
            type={"number"}
            defaultValue={diveInfo.gear.weight}
            onChange={(e) => {
              updateFields({
                diveInfo: {
                  ...diveInfo,
                  gear: {
                    ...diveInfo.gear,
                    weight: Number(e.target.value),
                  },
                },
              });
            }}
            label={t("common:웨이트")}
            inputWidth={"30%"}
            unit={"kg"}
          />
        </RowWrapper>
      </FormLayout.Main>
    </FormLayout>
  );
};

export default GearForm;
