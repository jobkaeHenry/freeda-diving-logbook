import InputWithLabel from "@/components/atom/form/InputWithLabel";
import { login, signUp } from "@/data/URL/local/user/url";
import MobileWrapper from "@/layouts/MobileWrapper";
import axios from "@/lib/api/axios";
import { emailRegExp, passwordRegExp } from "@/utils/regExp";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/atom/form/Button";
import Text from "@/components/atom/Text";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type FormValues = {
  email: string;
  password: string;
  isSamePassword: string;
  nickName: string;
  image: undefined | string;
};

type Props = {};

const Signup = (props: Props) => {
  const { t } = useTranslation("user");
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  // 훅 폼
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { isSamePassword, ...otherData } = data;
    otherData.image = "";
    axios
      .post(signUp, otherData)
      .then(() => {
        alert("회원가입성공");
        router.replace(login);
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
          type={"text"}
          inputWidth={"100%"}
          weight={"var(--regular)"}
          label={t("닉네임")}
          placeholder={t("닉네임")}
          error={errors.nickName ? true : false}
          {...register("nickName", {
            required: true,
            min: 2,
          })}
        />

        <InputWithLabel
          type={"password"}
          label={t("비밀번호")}
          inputWidth={"100%"}
          weight={"var(--regular)"}
          placeholder={t("비밀번호")}
          error={errors.password ? true : false}
          // 패스워드 훅폼
          {...register("password", {
            required: true,
            pattern: passwordRegExp,
          })}
        />
        <InputWithLabel
          type={"password"}
          label={t("비밀번호 확인")}
          inputWidth={"100%"}
          weight={"var(--regular)"}
          placeholder={t("비밀번호 확인")}
          error={errors.isSamePassword ? true : false}
          // 패스워드 동일여부
          {...register("isSamePassword", {
            required: true,
            validate: (value) => {
              const password = getValues("password");
              return password === value;
            },
          })}
        />

        <Text role={"alert"} typography={"p"} color={"var(--alert-red)"}>
          {serverError}
        </Text>
        <Button type="submit">{t("회원가입")}</Button>

        <Link href={login}>
          <Text typography={"p"} color={"var(--font-gray)"}>
            {t("이미 계정이 있으신가요?")}
            <Text typography={"p"} color={"var(--main)"} bold>
              {` ${t("로그인")}`}
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

export default Signup;
