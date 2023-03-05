import Text from "@/components/atom/Text";
import InputWithLabel from "@/components/form/InputWithLabel";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import { useTranslation } from "react-i18next";
import DepthGraph from "../components/DepthGraph";
import FormLayout from "../../../layouts/newlog/FormLayout";
import { RowWrapper } from "../../../layouts/Wrapper";

type Props = Pick<DiveLogTypes, "diveInfo"> & {
  updateFields: (field: Pick<DiveLogTypes, "diveInfo">) => void;
};

const DepthForm = ({ diveInfo, updateFields }: Props) => {
  const { t } = useTranslation();
  return (
    <FormLayout>
      {/* 타이틀 */}
      <FormLayout.Title>
        <Text typography="h1" bold as={"h1"}>
          {t("수심")}
        </Text>
      </FormLayout.Title>
      {/* 메인 */}
      <FormLayout.Main>
        <DepthGraph average={diveInfo.depth.average} max={diveInfo.depth.max} />
        <RowWrapper>
          <InputWithLabel
            label={t("평균수심")}
            unit={"m"}
            type="number"
            defaultValue={diveInfo.depth.average}
            onBlur={(e) => {
              updateFields({
                diveInfo: {
                  ...diveInfo,
                  depth: { ...diveInfo.depth, average: Number(e.target.value) },
                },
              });
            }}
            min={0}
            autoFocus
          />
          <InputWithLabel
            label={t("최대수심")}
            type="number"
            unit={"m"}
            defaultValue={diveInfo.depth.max}
            min={0}
            onBlur={(e) => {
              updateFields({
                diveInfo: {
                  ...diveInfo,
                  depth: { ...diveInfo.depth, max: Number(e.target.value) },
                },
              });
            }}
          />
        </RowWrapper>
      </FormLayout.Main>
    </FormLayout>
  );
};

export default DepthForm;
