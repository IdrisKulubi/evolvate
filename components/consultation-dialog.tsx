"use client"

import { useRef } from "react"
import Link from "next/link"
import { EnvelopeSimple, X } from "@phosphor-icons/react"

const prompts = [
  { label: "Your context", detail: "What is happening in the business now?" },
  { label: "The decision", detail: "What needs to become clearer?" },
  { label: "The timing", detail: "When does movement need to begin?" },
] as const

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
        <h2 id="consultation-title">A short note is enough to begin.</h2>
        <p>
          Tell us what is changing and what you need to decide. We read every
          enquiry and reply from Sweden.
        </p>
        <a
          className="consultation-button dialog-email"
          href="mailto:info@evolvateconsulting.com?subject=Consultation%20enquiry"
        >
          <EnvelopeSimple size={20} aria-hidden="true" />
          info@evolvateconsulting.com
        </a>
        <ul className="dialog-prompts">
          {prompts.map((prompt) => (
            <li key={prompt.label}>
              <span>{prompt.label}</span>
              {prompt.detail}
            </li>
          ))}
        </ul>
        <Link
          className="dialog-contact-link"
          href="/contact"
          onClick={() => dialogRef.current?.close()}
        >
          Or visit the contact page
        </Link>
      </div>
    </dialog>
  )
}
