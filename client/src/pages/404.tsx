import { Button } from "@/components/atom/form/Button";
import { ColumnWrapper } from "@/layouts/Wrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Text from "@/components/atom/Text";
import Image from "next/image";
import logo100 from '@/assets/logo100.jpg'

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
        <Image src={logo100} width={100} height={100} alt="logo image"></Image>
      </Link>
      <Text typography="h3">존재하지않는 페이지입니다</Text>
      <Text typography="p">{timer}초 후 메인페이지로 이동합니다</Text>
      <Link href={"/"}>
        <Button className="mt-16 ghost_hover">홈으로 이동</Button>
      </Link>
    </ColumnWrapper>
  );
};
export default NotFoundPage;
