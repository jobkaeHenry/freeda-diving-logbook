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
