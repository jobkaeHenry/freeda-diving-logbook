import {
  isModalOpenAtom,
  modalComponentAtom,
} from "@/context/recoil/atom/globalModalAtom";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

/** 모달 컴포넌트를 인자로 받아 모달을 생성해주는 함수를 리턴하는 훅 */
const useModal = () => {
  const [ModalComponent, setModalComponent] =
    useRecoilState(modalComponentAtom);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenAtom);
  const router = useRouter();

  /** 모달로 사용할 컴포넌트를 인자로 받아 모달을 생성 */
  const openModal = (component: React.ReactNode) => {
    history.pushState({ ...history.state, modal: true }, "", location.href);
    window.addEventListener("popstate", closeModal);

    if (ModalComponent !== component) {
      setModalComponent(component);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalComponent(null);
    // 히스토리의 상태가 내가 만든것인 경우 (뒤로가기를 누르면 브라우저 생성 상태가 뜸)
    if (history.state.modal) {
      router.back();
    }
    window.removeEventListener("popstate", closeModal);
  };
  return { isModalOpen, openModal, closeModal };
};

export default useModal;
