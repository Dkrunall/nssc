"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/config/site";

type Props = {
  variant: "light" | "dark" | "icon";
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const src = {
  light: "/brand/logo-light.png",
  dark: "/brand/logo-dark.png",
  icon: "/brand/icon.png",
};

/** Brand image with a text fallback if the file is missing. */
export function Logo({ variant, className = "", priority, sizes }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span
        className={`font-heading text-2xl font-bold ${variant === "dark" ? "text-gold-400" : "text-green-900"}`}
      >
        {site.shortName}
      </span>
    );
  }
  const square = variant === "icon";
  return (
    <Image
      src={src[variant]}
      alt={square ? "" : `${site.name} logo`}
      width={square ? 500 : 900}
      height={square ? 500 : 600}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
