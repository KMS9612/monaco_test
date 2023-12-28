"use client";

import * as monaco from "monaco-editor";
import { useEffect, useRef } from "react";

export default function Home() {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      monaco.editor.create(editorRef.current, {
        value: `function sayHello () { 
          console.log("helloWorld")
        }`,
        language: "javascript",
        theme: "vs-dark",
      });
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2>CodeEditor</h2>
      <div
        id="editor"
        ref={editorRef}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
}
