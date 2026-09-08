"use client"

import type { ButtonHTMLAttributes } from "react"

interface ConsultationTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  dialogId?: string
}

export function ConsultationTrigger({
  children,
  dialogId = "consultation-dialog",
  type = "button",
  ...props
}: ConsultationTriggerProps) {
  function handleClick() {
    const dialog = document.getElementById(dialogId)

    if (dialog instanceof HTMLDialogElement) dialog.showModal()
  }

  return (
    <button type={type} {...props} onClick={handleClick}>
      {children}
    </button>
  )
}
