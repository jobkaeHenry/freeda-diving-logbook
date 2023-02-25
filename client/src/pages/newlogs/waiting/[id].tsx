import axios from "@/lib/api/axios";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DiveLogTypes } from "../../../types/DiveLogTypes";

type Props = {
  data: DiveLogTypes | null;
};

const DiveSucess = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;

  return <>{id}</>;
};

export default DiveSucess;
