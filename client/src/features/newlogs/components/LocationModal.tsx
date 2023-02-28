import TextInput from "@/components/atom/TextInput";
import useDebounce from "@/hooks/useDebounce";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import SearchIcon from "@/assets/searchIcon.svg";
import Text from "@/components/atom/Text";
import { css } from "@emotion/react";
import { DiveLogTypes } from "@/types/DiveLogTypes";
import { useSetRecoilState } from "recoil";
import { isModalOpenAtom } from "@/recoil/atom/globalModalAtom";

type Props = {
  currentValue: string;
  updateFields: (field: Pick<DiveLogTypes, "location" & "diveInfo">) => void;
};

const LocationModal = (props: Props) => {
  const { currentValue, updateFields } = props;
  const setModalState = useSetRecoilState(isModalOpenAtom)

  const [value, setValue] = useState(currentValue ? currentValue : "");
  const [place, setPlace] =
    useState<google.maps.places.PlaceResult[] | null>(null);
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    const request = {
      query: debouncedValue,
      fields: ["name", "formatted_address", "geometry"],
    };
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.findPlaceFromQuery(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        setPlace(results);
      }
    });
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
        <ResultWrapper>
          {place?.map((elem, index) => (
            <ResultElem
              key={index}
              onClick={(event) => {
                const lng = elem.geometry?.location?.lng();
                const lat = elem.geometry?.location?.lat();
                updateFields({
                  location: {
                    title: elem.name,
                    address: elem.formatted_address,
                    lng: lng,
                    lat: lat,
                  },
                });
                setModalState(false)
              }}
            >
              <Text typography={"h3"} bold css={WordBreak}>
                {elem.name}
              </Text>
              <Text typography="sub">{elem.formatted_address}</Text>
            </ResultElem>
          ))}
        </ResultWrapper>
      </Container>
    </>
  );
};

export const WordBreak = css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
`;

const ResultElem = styled.div`
  padding: 16px;
  border-bottom: 1px solid var(--line-gray);
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;

const Container = styled.div`
  height: inherit;
`;

const Wrapper = styled.div`
  margin-top: 36px;
`;

const ResultWrapper = styled.div`
  height: inherit;
  margin-top: 16px;
  overflow-y: scroll;
`;

export default LocationModal;
