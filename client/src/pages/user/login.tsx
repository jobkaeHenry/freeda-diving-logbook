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
import { login, signUp } from "@/data/URL/local/user/url";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { emailRegExp, passwordRegExp } from "@/utils/regExp";
import { axiosPrivate } from "@/lib/api/axios";

type FormValues = {
  email: string;
  password: string;
};

type Props = {};

const Login = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation("user");
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  // 훅 폼
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    axiosPrivate
      .post(login, data)
      .then(() => {
        // if (window.history.length < 2) {
        //   router.replace("/");
        // } else {
        //   router.back();
        // }
        alert("로그인성공")
      })
      .catch((err) => {
        const ErrorCode = err?.response?.status;
        if (ErrorCode > 499) {
          setServerError("server Error");
        }
        if (ErrorCode === 401) {
          setServerError("wrong Password");
        }
      });
  };

  return (
    <>
      <MobileWrapper as={"form"} onSubmit={handleSubmit(onSubmit)}>
        <InputWithLabel
          type={"email"}
          inputWidth={"100%"}
          weight={"var(--regular)"}
          label={t("이메일")}
          placeholder={t("이메일")}
          // 이메일 훅폼
          error={errors.email ? true : false}
          {...register("email", {
            required: true,
            pattern: emailRegExp,
          })}
        />

        <InputWithLabel
          type={showPassword ? "text" : "password"}
          label={t("비밀번호")}
          inputWidth={"100%"}
          weight={"var(--regular)"}
          placeholder={t("비밀번호")}
          icon={EyeIcon}
          error={errors.password ? true : false}
          onClick={() => setShowPassword((prev) => !prev)}
          // 패스워드 훅폼
          {...register("password", {
            required: true,
            pattern: passwordRegExp,
          })}
        />
        {/* onCheck 핸들러 달아야함 */}
        <Checkbox label={t("자동로그인")} />
        <Text role={"alert"} typography={"p"} color={"var(--alert-red)"}>
          {serverError}
        </Text>
        <Button type="submit">{t("로그인")}</Button>

        <Link href={signUp}>
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
