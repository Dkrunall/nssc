import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/config/site";

// [PRINCIPAL PHOTO] - drop vicky.jpg (or .jpeg / .png / .webp) into public/brand/ and rebuild.
// Until then a monogram is shown.
const exts = ["jpg", "jpeg", "png", "webp"];
const photo = exts.find((e) => existsSync(path.join(process.cwd(), "public/brand", `vicky.${e}`)));

export function Monogram({ initials = "VD" }: { initials?: string }) {
  if (photo) {
    return (
      <Image
        src={`/brand/vicky.${photo}`}
        alt={`${site.principal}, principal of ${site.shortName}`}
        width={320}
        height={320}
        sizes="160px"
        className="h-40 w-40 rounded-full border-2 border-gold-400 object-cover object-[50%_25%]"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`Monogram of ${site.principal}`}
      className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-gold-400 bg-green-900 font-heading text-6xl font-bold text-gold-400"
    >
      {initials}
    </div>
  );
}
