import Image from "next/image";

export const ImageContainer = () => {
  return (
    <section className="w-full flex flex-col min-w-40 min-h-40 max-w-5xl mx-auto">
      <Image src="/imgtest.webp" alt="Image Test" width={1024} height={1572} />
      <Image src="/imgtest.webp" alt="Image Test" width={1024} height={1572} />
      <Image src="/imgtest.webp" alt="Image Test" width={1024} height={1572} />
      <Image src="/imgtest.webp" alt="Image Test" width={1024} height={1572} />
      <Image src="/imgtest.webp" alt="Image Test" width={1024} height={1572} />
      <Image src="/imgtest.webp" alt="Image Test" width={1024} height={1572} />
      <Image src="/imgtest.webp" alt="Image Test" width={1024} height={1572} />
      <Image src="/imgtest.webp" alt="Image Test" width={1024} height={1572} />
      <Image src="/imgtest.webp" alt="Image Test" width={1024} height={1572} />
      <Image src="/imgtest.webp" alt="Image Test" width={1024} height={1572} />
    </section>
  );
};
