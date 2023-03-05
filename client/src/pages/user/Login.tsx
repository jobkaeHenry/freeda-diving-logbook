import Checkbox from "@/components/atom/Checkbox";
import InputWithLabel from "@/components/form/InputWithLabel";
import React, { useState } from "react";
import EyeIcon from "@/assets/eyeIcon.svg";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/atom/Button";
import MobileWrapper from "@/layouts/MobileWrapper";
import Link from "next/link";
import Text from "@/components/atom/Text";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

type Props = {};

const Login = (props: Props) => {
  const [userInput, setUserInput] = useState<string>();
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation("user");
  const router = useRouter();

  const submitHandler = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(window.history);
    if (window.history.length < 2) {
      router.replace("/");
    } else {
      router.back();
    }
  };

  return (
    <>
      <MobileWrapper as={"form"} onSubmit={submitHandler}>
        <InputWithLabel
          type={"email"}
          inputWidth={"100%"}
          weight={"var(--regular)"}
          label={t("이메일")}
          placeholder={t("이메일")}
          onBlur={(e) => {
            setUserInput(e.target.value);
          }}
        ></InputWithLabel>

        <InputWithLabel
          type={showPassword ? "text" : "password"}
          label={t("비밀번호")}
          inputWidth={"100%"}
          weight={"var(--regular)"}
          placeholder={t("비밀번호")}
          icon={EyeIcon}
          onClick={() => setShowPassword((prev) => !prev)}
        ></InputWithLabel>

        <Checkbox label={t("자동로그인")} />

        <Button type="submit">{t("로그인")}</Button>
        {userInput}
        <Link href={"/user/signup"}>
          <Text typography={"p"} color={"var(--font-gray)"}>
            {t("계정이 없으신가요?")}
            <Text typography={"p"} color={"var(--main)"} bold>
              {` ${t("회원가입")}`}
            </Text>
          </Text>
        </Link>
      </MobileWrapper>
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale;
  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", ["user"])),
      locale,
    },
  };
}

export default Login;
