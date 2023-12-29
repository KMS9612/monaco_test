import { MouseEvent } from "react";
import * as S from "../styles/themeModal";

export default function ThemeChangeModal({
  isOpen,
  handleModal,
}: {
  isOpen: boolean;
  handleModal: () => void;
}) {
  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <S.Container $isOpen={isOpen} onClick={handleModal}>
      <S.ModalBox onClick={stopPropagation}>Hello</S.ModalBox>
    </S.Container>
  );
}
