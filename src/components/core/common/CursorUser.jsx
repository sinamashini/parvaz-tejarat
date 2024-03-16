"use client";
import { useRef } from "react";
import CursorAnimation from "./CursorAnimation";

const CursorUser = () => {
  const cursor1 = useRef();
  const cursor2 = useRef();
  return <CursorAnimation cursor1={cursor1} cursor2={cursor2} />;
};

export default CursorUser;
