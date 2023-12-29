"use client";
import dynamic from "next/dynamic";
import * as S from "../src/styles/main";
import { useState } from "react";

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
  return (
    <S.Wrapper>
      <S.TopBox>
        <S.TopHead>CodeEditor</S.TopHead>
        <S.ThemeChanger>ThemeChange</S.ThemeChanger>
        {/* Button Components 들어올 자리 */}
      </S.TopBox>

      {/* Editor */}
      <MonacoEditor theme="vs-dark" value={innerCode}></MonacoEditor>
      {/* Editor */}
    </S.Wrapper>
  );
}
