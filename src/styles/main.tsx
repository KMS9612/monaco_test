import styled from "styled-components";

interface IPropsTopBox {
  $isDark: boolean;
}
interface IPropsTopHead {
  $isDark: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TopBox = styled.div<IPropsTopBox>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5%;
  gap: 20px;
  padding: 10px;
  background-color: ${(props) => (props.$isDark ? "#000" : "#ccc")};
`;

export const TopHead = styled.h2<IPropsTopHead>`
  color: ${(props) => (props.$isDark ? "#fff" : "#000")};
`;

export const ThemeChanger = styled.button`
  padding: 0 10px;
  border: 0;
  border-radius: 5px;
  height: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const EditorBox = styled.div`
  width: 100%;
  height: 95%;
`;
