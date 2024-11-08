import { Button, TextField } from "@mui/material";
import { Comic_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
        <h3 className="text-4xl">LOGIN</h3>
      </div>
      <form className="flex flex-col gap-4 mt-8">
        <TextField
          variant="outlined"
          id="email-input"
          label="Input your email"
          type="email"
          aria-label="Input login email"
          fullWidth
          sx={{
            backgroundColor: "transparent",
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              "& fieldset": { borderColor: "#999797" },
              "&:hover fieldset": { borderColor: "#fcd34d" },
              "&.Mui-focused fieldset": { borderColor: "#fcd34d" },
            },
            "& .MuiInputLabel-root": {
              color: "#fff",
              "&.Mui-focused": { color: "#fcd34d" },
            },
            "& .MuiInput-underline:before": { borderBottomColor: "#999797" },
            "& .MuiInput-underline:hover:before": { borderBottomColor: "#09f" },
            "& .MuiInput-underline:after": { borderBottomColor: "#09f" },
          }}
        />
        <TextField
          variant="outlined"
          id="password-input"
          label="Input your password"
          type="password"
          itemID="Input-login-password"
          aria-label="Input-login-password"
          fullWidth
          sx={{
            backgroundColor: "transparent",
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              "& fieldset": { borderColor: "#999797" },
              "&:hover fieldset": { borderColor: "#fcd34d" },
              "&.Mui-focused fieldset": { borderColor: "#fcd34d" },
            },
            "& .MuiInputLabel-root": {
              color: "#fff",
              "&.Mui-focused": { color: "#fcd34d" },
            },
            "& .MuiInput-underline:before": { borderBottomColor: "#999797" },
          }}
        />

        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#3a3a3a",
            ":hover": {
              backgroundColor: "#2a2a2a",
              color: "#999797",
            },
          }}
          type="submit"
        >
          Log in
        </Button>
        <div className="w-full">
          <Link
            href="/auth/signup"
            className="w-full text-center block hover:text-[#999797] py-1 hover:bg-[#3a3a3a] transition-colors"
          >
            SIGN UP
          </Link>
        </div>
      </form>
    </section>
  );
}
