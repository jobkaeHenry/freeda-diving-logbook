import TextInput from "@/components/atom/TextInput";
import useDebounce from "@/hooks/useDebounce";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import SearchIcon from "@/assets/searchIcon.svg";
import GoogleMap from "./GoogleMap";
import axios from "@/lib/api/axios";
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
      // axios.get(
      //   `/maps/api/place/textsearch/json?key=AIzaSyA_7KytnyYEa4zHKjuByUAQ6fxdE40K9fY&query=${debouncedValue}`,
      //   { baseURL: "https://maps.googleapis.com"}
      // ).then((res)=>{console.log(res.data)})
      console.log(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <>
      <GoogleMap />
      <TextInput
        icon={SearchIcon}
        type={"text"}
        value={value}
        autoFocus
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
export default LocationModal;
