import Image from "next/image"

interface EditorialPhotoProps {
  src: string
  alt: string
  label: string
  caption: string
  variant?: "bleed" | "inset"
}

export function EditorialPhoto({
  src,
  alt,
  label,
  caption,
  variant = "inset",
}: EditorialPhotoProps) {
  return (
    <figure className={`editorial-photo editorial-photo-${variant}`}>
      <div className="editorial-photo-frame">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            variant === "bleed" ? "100vw" : "(min-width: 1440px) 1344px, 100vw"
          }
        />
      </div>
      <figcaption>
        <span>{label}</span>
        <p>{caption}</p>
      </figcaption>
    </figure>
  )
}
