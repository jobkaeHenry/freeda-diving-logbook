import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { QrReader } from "react-qr-reader";

type Props = {};

const QRScan = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <QrReader
        constraints={{ facingMode: "environment" }}
        onResult={(result: any, error) => {
          if (!!result) {
            router.replace(result?.text);
          }
        }}
        css={css`
          width: 100%;
          height: 100%;
        `}
      ></QrReader>
    </>
  );
};

export default QRScan;
