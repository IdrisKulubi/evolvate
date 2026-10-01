import Image from "next/image"
import Link from "next/link"

type BrandLogoProps = {
  className?: string
  variant?: "primary" | "reversed"
}

export function BrandLogo({
  className = "",
  variant = "primary",
}: BrandLogoProps) {
  return (
    <Link
      className={`brand-logo ${className}`.trim()}
      href="/"
      aria-label="Evolvate Consulting home"
    >
      <Image
        src={
          variant === "reversed"
            ? "/brand/evolvate-logo-reversed.svg"
            : "/brand/evolvate-logo.svg"
        }
        alt=""
        width={485}
        height={150}
        priority={variant === "primary"}
      />
    </Link>
  )
}
