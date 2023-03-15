import React from "react";
import "./styles.css";

interface ToastProps {
  visible: boolean
  text: string
  status: StatusProps
}

export type StatusProps = "success" | "failed" | "warning";

function Toast({ visible, text, status }: ToastProps) {
  return (
    <div
      className={`
        toast
        ${status.toString()}
        ${visible ? "visible" : ""}
      `}
    >
      {text}
    </div>
  )
}

export default Toast
