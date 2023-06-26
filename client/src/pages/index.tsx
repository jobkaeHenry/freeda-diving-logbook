import { Button } from "@/components/atom/form/Button";
import Text from "../components/atom/Text";
import { useRouter } from "next/router";
import { newLogPage } from "@/data/URL/local/divelog/url";
import MobileWrapper from "@/layouts/MobileWrapper";

export default function Home() {
  const router = useRouter();
  return (
    <MobileWrapper>
      <Text typography={"h1"} as={"h1"} bold>
        홈페이지입니당
      </Text>
      <Button onClick={() => router.push(newLogPage)}>폼가보기</Button>
    </MobileWrapper>
  );
}