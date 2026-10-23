import Image from "next/image";

export function Flyer() {
  return (
    <Image
      src="/brand/flyer.webp"
      alt="NSSC flyer: Solutions for All Physical Share Issues, listing our eight services with phone, email and Dahisar (E) Mumbai office details"
      width={1080}
      height={1350}
      sizes="(min-width:768px) 380px, 90vw"
      className="h-auto w-full max-w-sm rounded-2xl shadow-soft"
    />
  );
}
