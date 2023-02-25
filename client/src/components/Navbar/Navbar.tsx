import styled from "@emotion/styled";
import React from "react";

import GoBack from "../../assets/leftArrow.svg";
import { useRouter } from "next/router";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  return (
    <NavWrapper>
      <GoBack
        onClick={() => {
          router.back();
        }}
      />
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--pure-white);
`;

export default Navbar;
