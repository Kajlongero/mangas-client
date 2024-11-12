import Image from "next/image";
import { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

import { LoginForm } from "@/core/components/Forms/Login";

const metadata: Metadata = {};

const comic = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function LoginPage() {
  return (
    <section
      className={`background-21-container mobile:px-8 max-w-[28rem] ${comic.className}`}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <figure className="relative w-16 h-16 object-cover">
          <Image
            src="/logos/logo.png"
            width={240}
            height={240}
            title="Kajlomangas logo"
            alt="Kajlomangas logo"
            className="object-cover w-full h-full bg-transparent rounded-lg"
          ></Image>
        </figure>
        <h3 className="text-4xl">LOGIN</h3>
      </div>
      <LoginForm />
    </section>
  );
}
