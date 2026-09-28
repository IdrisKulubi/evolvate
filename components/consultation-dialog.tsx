"use client"

import { useRef } from "react"
import { ArrowUpRight, X } from "@phosphor-icons/react"

export function ConsultationDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <dialog
      id="consultation-dialog"
      ref={dialogRef}
      className="consultation-dialog"
      aria-labelledby="consultation-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close()
      }}
    >
      <div className="consultation-dialog-content">
        <button
          className="dialog-close"
          aria-label="Close consultation details"
          onClick={() => dialogRef.current?.close()}
        >
          <X size={22} />
        </button>
        <p className="dialog-label">Evolvate Consulting</p>
        <h2 id="consultation-title">
          Every next chapter
          <br />
          starts with a conversation.
        </h2>
        <p>
          Consultation booking is coming soon. We would like to hear about your
          business, your challenges, and what you are working toward—so we can
          see if we are the right partner to support you.
        </p>
        <button
          className="consultation-button"
          onClick={() => dialogRef.current?.close()}
        >
          Back to Evolvate <ArrowUpRight size={20} aria-hidden="true" />
        </button>
      </div>
    </dialog>
  )
}
