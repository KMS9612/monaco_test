import styled from "styled-components";

interface IPropsContainer {
  $isOpen: boolean;
}

export const Container = styled.div<IPropsContainer>`
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(158, 158, 158, 0.176);
  z-index: 20;
  transition: all 300ms;
  transition-duration: 300ms;
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: fit-content;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
  z-index: 21;
  opacity: 1;
`;

export const ModalHeader = styled.h3`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
`;

export const ThemeTypeButton = styled.button`
  width: 90%;
  height: 50px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
  transition: all 300ms;
  &:hover {
    background-color: #000;
    color: #fff;
    transform: translateY(-10px);
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
