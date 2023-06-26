import { Button } from "@/components/atom/form/Button";
import MobileWrapper from "@/layouts/MobileWrapper";
import { ColumnWrapper } from "@/layouts/Wrapper";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Text from "@/components/atom/Text";

const NotFoundPage = () => {
  const [timer, setTimer] = useState(5);
  const router = useRouter();
  useEffect(() => {
    const timeReducer = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0) {
        clearInterval(timeReducer);
        router.push("/");
      }
    }, 1000);
    return () => clearInterval(timeReducer);
  }, [timer]);

  return (
    <ColumnWrapper style={{ alignItems: "center" }}>
      <Link href={"/"}>
        <Logo src={"logo"} alt="로고" />
      </Link>
      <Text typography="h3">존재하지않는 페이지입니다</Text>
      <Text typography="p">{timer}초 후 메인페이지로 이동합니다</Text>
      <Link href={"/"}>
        <Button className="mt-16 ghost_hover">홈으로 이동</Button>
      </Link>
    </ColumnWrapper>
  );
};
const Logo = styled.img`
  width: 150px;
  height: 150px;
`;
export default NotFoundPage;
