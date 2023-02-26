import {
  isModalOpenAtom,
  modalComponentAtom,
} from "@/recoil/atom/globalModalAtom";
import styled from "@emotion/styled";
import { useRecoilValue, useRecoilState } from "recoil";

import { Button } from "../atom/Button";
import Portal from "./Portal";

export const Modal = () => {
  const modalElem = useRecoilValue(modalComponentAtom);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenAtom);

  return isModalOpen ? (
    <Portal>
      <ModalBackDrop onClick={() => setIsModalOpen((prev) => !prev)}>
        <ModalWrapper
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {modalElem}
        </ModalWrapper>
      </ModalBackDrop>
    </Portal>
  ) : null;
};
const ModalWrapper = styled.div`
  max-width: 100%;
  min-width: 50%;
  min-height: 50%;
  max-height: 100%;
  padding: 16px;
  background-color: var(--pure-white);
  border-radius: 8px;
`;

const ModalBackDrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 998;
`;
