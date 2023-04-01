import Checkbox from "@/components/atom/form/Checkbox";
import Text from "@/components/atom/Text";
import InputWithLabel from "@/components/atom/form/InputWithLabel";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import styled from "@emotion/styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AirUsageIndicator from "../components/AirUsageIndicator";
import FormLayout from "../../../layouts/newlog/FormLayout";
import { RowWrapper } from "../../../layouts/Wrapper";

type Props = Pick<DiveLogTypes, "diveInfo"> & {
  updateFields: (field: Pick<DiveLogTypes, "diveInfo">) => void;
};

const AirUsageForm = ({ diveInfo, updateFields }: Props) => {
  const { t } = useTranslation();
  const [isNitrox, setIsNitrox] = useState(diveInfo.air.nitrox ? true : false);
  return (
    <FormLayout>
      {/* 타이틀 */}
      <FormLayout.Title>
        <Text typography="h1" bold as={"h1"}>
          {t("공기 사용량")}
        </Text>
      </FormLayout.Title>
      {/* 메인 */}
      <FormLayout.Main>
        <AirUsageIndicator airIn={diveInfo.air.in} airOut={diveInfo.air.out} />
        <RowWrapper>
          <InputWithLabel
            label={t("입수잔압")}
            unit={"bar"}
            defaultValue={diveInfo.air.in}
            inputWidth={"50%"}
            onChange={(e) => {
              updateFields({
                diveInfo: {
                  ...diveInfo,
                  air: { ...diveInfo.air, in: Number(e.target.value) },
                },
              });
            }}
            min={0}
          />
          <InputWithLabel
            label={t("출수잔압")}
            unit={"bar"}
            defaultValue={diveInfo.air.out}
            inputWidth={"50%"}
            onChange={(e) => {
              updateFields({
                diveInfo: {
                  ...diveInfo,
                  air: { ...diveInfo.air, out: Number(e.target.value) },
                },
              });
            }}
            autoFocus
            min={0}
          />
        </RowWrapper>
        <CheckBoxWrapper>
          <Checkbox
            label={"Nitrox"}
            defaultChecked={isNitrox}
            onChange={(e) => {
              setIsNitrox(e.target.checked);
              if (e.currentTarget.checked) {
                updateFields({
                  diveInfo: {
                    ...diveInfo,
                    air: {
                      ...diveInfo.air,
                      nitrox: diveInfo.air.nitrox ? diveInfo.air.nitrox : 32,
                    },
                  },
                });
              } else if (!e.currentTarget.checked) {
                updateFields({
                  diveInfo: {
                    ...diveInfo,
                    air: { ...diveInfo.air, nitrox: undefined },
                  },
                });
              }
            }}
          />
          <Checkbox
            label={t("멀티탱크")}
            defaultChecked={diveInfo.air.isMultiTank}
            onChange={(e)=>{
              updateFields({
                diveInfo: {
                  ...diveInfo,
                  air: { ...diveInfo.air, isMultiTank:e.currentTarget.checked },
                },
              });
            }}
          />
        </CheckBoxWrapper>
        <FormLayout.Selective validation={isNitrox}>
          <InputWithLabel
            label={t("산소농도")}
            unit="%"
            type="number"
            defaultValue={diveInfo.air.nitrox}
            onChange={(e) => {
              updateFields({
                diveInfo: {
                  ...diveInfo,
                  air: { ...diveInfo.air, nitrox: Number(e.target.value) },
                },
              });
            }}
            inputWidth="25%"
            max={100}
            min={0}
          />
        </FormLayout.Selective>
      </FormLayout.Main>
    </FormLayout>
  );
};

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default AirUsageForm;
