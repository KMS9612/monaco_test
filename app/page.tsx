"use client";
import dynamic from "next/dynamic";
import * as S from "../src/styles/main";
import { useRef, useState } from "react";
import ThemeChangeModal from "@/src/components/themeModal";
import { useRecoilValue } from "recoil";
import { ThemeState } from "@/src/recoil/themeHandler";

const MonacoEditor = dynamic(() => import("react-monaco-editor"), {
  ssr: false,
});

export default function Home() {
  const [innerCode, setInnerCode] = useState<string>(`
  const Hello = "helloWolrd";
  function sayHello () {
    console.log(Hello);
    return Hello
  };
  
  return sayHello();
  `);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);
  const ThemeValue = useRecoilValue(ThemeState);
  const editorRef = useRef<any>(null);

  const editorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  const handleModal = (boolType: boolean) => {
    setIsOpen(boolType);
  };

  const onChangeSetCode = (newValue: any) => {
    setInnerCode(newValue);
  };

  const onClickRunCode = () => {
    try {
      const result = new Function(innerCode);
      setResult(result);
    } catch (error: any) {
      console.log(error);
    }
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
        <S.RunButton onClick={onClickRunCode}>Run!</S.RunButton>
      </S.TopBox>
      <S.EditorBox>
        {/* Editor */}
        <MonacoEditor
          width="50%"
          theme={ThemeValue}
          value={innerCode}
          onChange={onChangeSetCode}
          editorDidMount={editorDidMount}
        ></MonacoEditor>
        {/* EditorEnd */}
        {/* Result */}
        <S.ResultBox $isDark={ThemeValue === "vs-dark"}>
          Code Result <br />
          <br />
          {result}
        </S.ResultBox>
        {/* Result End */}
      </S.EditorBox>
    </S.Wrapper>
  );
}
