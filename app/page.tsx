"use client";
import dynamic from "next/dynamic";
import * as S from "../src/styles/main";
import { useState } from "react";
import ThemeChangeModal from "@/src/components/themeModal";
import { useRecoilValue } from "recoil";
import { ThemeState } from "@/src/recoil/themeHandler";

const MonacoEditor = dynamic(() => import("react-monaco-editor"), {
  ssr: false,
});

export default function Home() {
  const [innerCode, setInnerCode] = useState(`
  const Hello = "helloWolrd";
  function sayHello () {
    console.log(Hello);
  };
  
  sayHello();
  `);
  const [isOpen, setIsOpen] = useState(false);
  const ThemeValue = useRecoilValue(ThemeState);

  const handleModal = (boolType: boolean) => {
    setIsOpen(boolType);
  };

  return (
    <S.Wrapper>
      {/* Modals */}
      <ThemeChangeModal isOpen={isOpen} handleModal={handleModal} />
      {/* Modals End */}
      <S.TopBox $isDark={ThemeValue === "vs-dark"}>
        <S.TopHead $isDark={ThemeValue === "vs-dark"}>CodeEditor</S.TopHead>
        <S.ThemeChanger onClick={() => handleModal(true)}>
          ThemeChange
        </S.ThemeChanger>
        {/* Button Components 들어올 자리 */}
      </S.TopBox>
      {/* Editor */}
      <S.EditorBox>
        <MonacoEditor theme={ThemeValue} value={innerCode}></MonacoEditor>
      </S.EditorBox>
      {/* Editor */}
    </S.Wrapper>
  );
}
