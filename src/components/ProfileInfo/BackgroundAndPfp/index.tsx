import Image from "next/image";

export const BackgroundAndPfp = () => {
  return (
    <>
      <section className="w-full h-full max-h-[50vh] relative">
        <Image
          src={"/IsekaiMaouToShoukanSFW.jpg"}
          alt="Profile Background image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          className="image-linear-gradient"
        />
        <header className="absolute bottom-[-1.5rem] w-full px-4 lg:flex lg:gap-4 lg:items-center">
          <figure className="min-h-32 max-md:h-32 max-md:w-32  h-full max-h-48 min-w-32 w-full max-w-48 mx-auto">
            <Image
              src={"/hoshino.png"}
              alt="Profile Background image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              className="w-full h-full object-cover bg-center rounded-2xl max-h-48 max-w-48"
            />
          </figure>
          <article className="text-white items-center pt-4 lg:flex-1">
            <h3 className="max-[28rem]:text-lg text-4xl w-full truncate mobile:text-center max-lg:text-center">
              Kajlongero Takanashi Developer
            </h3>
          </article>
        </header>
      </section>
    </>
  );
};
