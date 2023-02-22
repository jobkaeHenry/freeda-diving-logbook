import { Button } from "@/components/Button";
import Text from "../components/Text";
import Radio from "@/components/Radio";

export default function Home() {
  return (
    <>
      <Text typography="h1" bold as={"h1"}>
        보이라 프레이트 임니당
      </Text>
      <Button>안녕하세용</Button>

      <Radio onChange={(e) => console.log(e.target.value)}>
        <Radio.Option value={"hi"}>스쿠버다이빙</Radio.Option>
        <Radio.Option value={"방가"}>프리다이빙</Radio.Option>
      </Radio>
    </>
  );
}
