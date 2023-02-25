import { getDiveLog } from "@/data/URL/local/divelog/url";
import { ServerSideDiveLogType } from "@/types/DiveLogTypes";
import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  data: ServerSideDiveLogType;
};

const DiveLog = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <div>입수{data.diveInfo.air.in}</div>
      <div>출수{data.diveInfo.air.out}</div>
      <div>장소{data.location.title}</div>
      <div>주소{data.location.address}</div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const { data } = await axios.get<ServerSideDiveLogType>(
    `${getDiveLog}/${id}`
  );
  return {
    props: {
      data,
    },
  };
};

export default DiveLog;
