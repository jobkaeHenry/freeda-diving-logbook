import TextInput from "@/components/atom/TextInput";
import useDebounce from "@/hooks/useDebounce";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "@/assets/searchIcon.svg";
import GoogleMap from "./GoogleMap";
import axios from "@/lib/api/axios";
import Head from "next/head";
import Script from "next/script";
type Props = {
  currentValue: string;
};

const LocationModal = (props: Props) => {
  

  const [value, setValue] = useState(
    props.currentValue ? props.currentValue : ""
  );
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    if (debouncedValue) {
      console.log(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <>
      <Container>
        <Wrapper>
          {/* <GoogleMap></GoogleMap> */}
          <TextInput
            icon={SearchIcon}
            type={"text"}
            value={value}
            autoFocus
            onChange={(e) => setValue(e.target.value)}
          />
        </Wrapper>
        <ResultWrapper>답</ResultWrapper>
      </Container>
    </>
  );
};

const Map = styled.div`
  width: 100%;
  height: 400px;
`

const Container = styled.div`
  height: inherit;
`;

const Wrapper = styled.div`
  margin-top: 36px;
`;

const ResultWrapper = styled.div`
  margin-top: 16px;
  /* height: inherit; */
  background-color: dimgray;
  overflow-y: scroll;
`;

export default LocationModal;
