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
  width: 300px;
  height: 500px;
  background-color: #fff;
  z-index: 21;
  opacity: 1;
`;
