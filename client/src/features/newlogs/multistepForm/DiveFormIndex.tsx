import FormLayout from "../layouts/FormLayout";
import { useTranslation } from "next-i18next";
import Text from "@/components/atom/Text";
import styled from "@emotion/styled";
import { ColumnWrapper } from "@/layouts/Wrapper";
import Icon from "@/components/atom/Icon";
type Props = {};

const DiveFormIndex = (props: Props) => {
  const { t } = useTranslation(["diveForm", "common"]);
  return (
    <FormLayout>
      {/* 타이틀 */}
      <FormLayout.Title>
        <Text typography="h1" bold as={"h1"}>
          {t("버디와 함께 참여하셨나요?")}
        </Text>
      </FormLayout.Title>

      {/* 메인 */}
      <FormLayout.Main>

        <Wrapper accent>
          <Icon url="" size={48}></Icon>
          <ColumnWrapper noGap>
            <Text typography="h4" bold align="left">
              {t("QR코드 스캔하기")}
            </Text>
            <Text typography="p" align="left" color="var(--font-gray)">
              {t("버디가 작성한 정보를 사용할게요")}
            </Text>
          </ColumnWrapper>
        </Wrapper>
        <Wrapper>
          <Icon url="" size={48}></Icon>
          <ColumnWrapper noGap>
            <Text typography="h4" bold align="left">
              {t("직접 작성하기")}
            </Text>
            <Text typography="p" align="left" color="var(--font-gray)">
              {t("버디가 작성한 정보를 사용할게요")}
            </Text>
          </ColumnWrapper>
        </Wrapper>

      </FormLayout.Main>
    </FormLayout>
  );
};
interface ButtonProps {
  accent?: boolean;
}
const Wrapper = styled.button`
  padding: 16px;
  border: ${(props: ButtonProps) =>
    props.accent ? "1px solid var(--font-main)" : "1px solid var(--line-gray)"};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  gap: 8px;

  & span:first-child{
    color:${(props: ButtonProps) =>
    props.accent ? "var(--font-main)" : "var(--font-black)"};
  }
`;

export default DiveFormIndex;
