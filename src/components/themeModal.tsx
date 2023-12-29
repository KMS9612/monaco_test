import { MouseEvent } from "react";
import * as S from "../styles/themeModal";
import { useSetRecoilState } from "recoil";
import { ThemeState } from "../recoil/themeHandler";

export default function ThemeChangeModal({
  isOpen,
  handleModal,
}: {
  isOpen: boolean;
  handleModal: (booltype: boolean) => void;
}) {
  const setTheme = useSetRecoilState(ThemeState);
  const themeList = ["vs-dark", "vs-light"];

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onClickChangeTheme = (el: string) => {
    setTheme(el);
    handleModal(false);
  };

  return (
    <S.Container $isOpen={isOpen} onClick={() => handleModal(false)}>
      <S.ModalBox onClick={stopPropagation}>
        <S.ModalHeader>변경할 테마를 선택하세요.</S.ModalHeader>
        <S.ButtonWrapper>
          {themeList.map((el, index) => (
            <S.ThemeTypeButton
              onClick={() => onClickChangeTheme(el)}
              key={el + index}
            >
              {el}
            </S.ThemeTypeButton>
          ))}
        </S.ButtonWrapper>
      </S.ModalBox>
    </S.Container>
  );
}
