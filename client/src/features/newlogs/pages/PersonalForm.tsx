import Text from "@/components/atom/Text";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import FormLayout from "../layout/FormLayout";

type Props = Pick<DiveLogTypes, "personal"> & {
  updateFields: (field: Pick<DiveLogTypes, "personal">) => void;
};

const GearForm = ({personal}: Props) => {

  return (
    <FormLayout>
      {/* 타이틀 */}
      <FormLayout.Title>
        <Text typography="h1" bold as={"h1"}>
          다이빙은 어떠셨나요?
        </Text>
      </FormLayout.Title>
      {/* 메인 */}
      <FormLayout.Main>
        <input type="text" required defaultValue={personal.waterTemp}/>
        <input type="text" defaultValue={personal.content}/>
      </FormLayout.Main>
    </FormLayout>
  );
};

export default GearForm;
