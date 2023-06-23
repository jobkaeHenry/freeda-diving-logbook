import Text from "@/components/atom/Text";
import styled from "@emotion/styled";
import QRCode from "react-qr-code";

type Props = {
  url: string;
  author: string;
};

const QRModal = (props: Props) => {
  const { url, author } = props;
  return (
    <ModalWrapper>
      <Text
        typography={"h4"}
        bold
        color={"var(--font-main)"}
      >{`'${author}' 님의 로그`}</Text>
      <QRWrapper>
        <QRCode value={url ? url : ""} size={200} />
      </QRWrapper>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: var(--bg-light);
`;
const QRWrapper = styled.div`
  padding: 16px;
  background-color: var(--pure-white);
`;

export default QRModal;
