import Text from "@/components/atom/Text";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import { useTranslation } from "next-i18next";
import FormLayout from "../layout/FormLayout";

type Props = Pick<DiveLogTypes, "diveInfo"> & {
  updateFields: (field: Pick<DiveLogTypes, "diveInfo">) => void;
};

const GearForm = ({diveInfo}: Props) => {
  const {t} = useTranslation(['diveForm','common'])
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
        <input type="number" required defaultValue={diveInfo.gear.suit.thickness}/>
        <input type="number" required defaultValue={diveInfo.gear.weight}/>
      </FormLayout.Main>
    </FormLayout>
  );
};

export default GearForm;
