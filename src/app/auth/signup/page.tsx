import Image from "next/image";
import { Comic_Neue } from "next/font/google";
import { SignupForm } from "@/components/Forms/Signup";

const comic = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function SignupPage() {
  return (
    <section
      className={`background-21-container mobile:px-8 max-w-[28rem] ${comic.className}`}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <figure className="relative w-32 h-32 object-cover">
          <Image
            src="/logos/logo.png"
            width={320}
            height={320}
            title="Kajlomangas logo"
            alt="Kajlomangas logo"
            className="object-cover w-full h-full bg-transparent rounded-lg"
          ></Image>
        </figure>
        <h3 className="text-4xl">REGISTER</h3>
      </div>
      <SignupForm />
    </section>
  );
}
