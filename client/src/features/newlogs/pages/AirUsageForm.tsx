import Text from "@/components/atom/Text";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import FormLayout from "../layout/FormLayout";

type Props = Pick<DiveLogTypes, "diveInfo"> & {
  updateFields: (field: Pick<DiveLogTypes, "diveInfo">) => void;
};

const AirUsageForm = ({diveInfo}: Props) => {

  return (
    <FormLayout>
      {/* 타이틀 */}
      <FormLayout.Title>
        <Text typography="h1" bold as={"h1"}>
          공기사용량
        </Text>
      </FormLayout.Title>
      {/* 메인 */}
      <FormLayout.Main>
        <input type="number" required defaultValue={diveInfo.air.in}/>
        <input type="number" required defaultValue={diveInfo.air.out}/>
      </FormLayout.Main>
    </FormLayout>
  );
};

export default AirUsageForm;
