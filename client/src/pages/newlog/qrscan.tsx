import { useRouter } from "next/router";
import { QrReader } from "react-qr-reader";
import FixedBottomCTA from "@/layouts/FixedBottomCTA";
import { Button } from "@/components/atom/form/Button";
import SectionHeading from "@/components/SectionHeading";
import Text from "@/components/atom/Text";
import PaddingLayout from "@/layouts/PaddingLayout";
import ViewFinder from "@/layouts/ViewFinder";
import Navbar from "@/components/Navigation/Navbar";
import { newLogPage } from "@/data/URL/local/divelog/url";

type Props = {};

const QRScan = (props: Props) => {
  const router = useRouter();
  return (
    <PaddingLayout>
      <Navbar></Navbar>
      <SectionHeading>
        <Text typography="h2" bold>
          QR스캔하기
        </Text>
        QR코드 스캔을 통해 편하게 작성해보세요
      </SectionHeading>

      <QrReader
        constraints={{ facingMode: "environment" }}
        onResult={(result, _error) => {
          if (!!result) {
            console.log('!!!!!!!')
            console.log(result.getText())
            router.replace(result.getText());
          }
        }}
        videoStyle={{ "object-fit": "cover" }}
        containerStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        videoContainerStyle={{
          width: "calc(100vw - 32px)",
          height: "calc(100vw - 32px)",
          borderRadius: "16px",
          maxHeight: "70vh",
          maxWidth: "70vh",
          backgroundColor: "black",
          paddingTop: 0,
        }}
        ViewFinder={ViewFinder}
      ></QrReader>

      <FixedBottomCTA>
        <Button onClick={() => router.push(newLogPage)} variant="ghost">
          직접 작성하기
        </Button>
      </FixedBottomCTA>
    </PaddingLayout>
  );
};

export default QRScan;
