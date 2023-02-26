import Radio from "@/components/atom/Radio";
import Text from "@/components/atom/Text";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import { useTranslation } from "next-i18next";
import FormLayout from "../layout/FormLayout";

type Props = Pick<DiveLogTypes, "diveType"> & {
  updateFields: (field: Pick<DiveLogTypes, "diveType">) => void;
};

const DiveTypeForm = (props: Props) => {
  const { t } = useTranslation(["diveForm", "common"]);

  return (
    <FormLayout>
      {/* 타이틀 */}
      <FormLayout.Title>
        <Text typography="h1" bold as={"h1"}>
          {t("어떤 활동을 하셨나요?")}
        </Text>
      </FormLayout.Title>
      {/* 메인 */}
      <FormLayout.Main>
        <Radio
          onChange={(e) => {
            if (e.target.value === "scuba" || e.target.value === "free") {
              props.updateFields({ diveType: e.target.value });
            }
          }}
          value={props.diveType}
        >
          <Radio.Option value={"scuba"}>{t("common:스쿠버다이빙")}</Radio.Option>
          <Radio.Option value={"free"}>{t("common:프리다이빙")}</Radio.Option>
        </Radio>
      </FormLayout.Main>
    </FormLayout>
  );
};

export default DiveTypeForm;
