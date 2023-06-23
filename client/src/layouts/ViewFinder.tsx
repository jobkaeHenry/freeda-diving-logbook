import styled from "@emotion/styled";
import ViewFinderImage from "@/assets/viewFinder.svg";

type Props = {};

const ViewFinder = (props: Props) => {
  return (
    <ViewFinderWrapper>
      <ViewFinderImage />
    </ViewFinderWrapper>
  );
};

export default ViewFinder;

const ViewFinderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 2rem;
  position: absolute;
  z-index: 9999;
`;
