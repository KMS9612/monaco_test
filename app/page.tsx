"use client";
import dynamic from "next/dynamic";
import * as S from "../src/styles/main";
import { useState } from "react";
import ThemeChangeModal from "@/src/components/themeModal";

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

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.Wrapper>
      {/* Modals */}
      <ThemeChangeModal isOpen={isOpen} handleModal={handleModal} />
      {/* Modals End */}
      <S.TopBox>
        <S.TopHead>CodeEditor</S.TopHead>
        <S.ThemeChanger onClick={handleModal}>ThemeChange</S.ThemeChanger>
        {/* Button Components 들어올 자리 */}
      </S.TopBox>
      {/* Editor */}
      <S.EditorBox>
        <MonacoEditor theme="vs-dark" value={innerCode}></MonacoEditor>
      </S.EditorBox>
      {/* Editor */}
    </S.Wrapper>
  );
}
