import styled from "styled-components";

interface IPropsIsDark {
  $isDark: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TopBox = styled.div<IPropsIsDark>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5%;
  gap: 20px;
  padding: 10px;
  background-color: ${(props) => (props.$isDark ? "#000" : "#ccc")};
`;

export const TopHead = styled.h2<IPropsIsDark>`
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
  display: flex;
`;

export const ResultBox = styled.div<IPropsIsDark>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.$isDark ? "#1e1e1e" : "#fff")};
  color: ${(props) => (props.$isDark ? "#d4d4d4" : "#000")};
`;

export const RunButton = styled.button`
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
