import { Button } from "@/components/atom/Button";
import Text from "../components/atom/Text";
import { useRouter } from "next/router";
import { newLog } from "@/data/URL/local/divelog/url";
import QRCode from "react-qr-code";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Text typography={"h1"} as={"h1"} bold>
        홈페이지입니당
      </Text>
      <QRCode value="http://localhost:3000/newlogs" size={200}></QRCode>
      <Button onClick={() => router.push(newLog)}>폼가보기</Button>
    </>
  );
}
