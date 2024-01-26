import Image from "next/image";
import lightBg from "@/assets/sign-up-light.jpg";
import darkBg from "@/assets/sign-up-dark.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SignUpAuthForm from "./sign-up-auth-form";

const SignUp = () => {
  return (
    <section className="w-full min-h-screen max-w-screen-2xl mx-auto flex">
      {/* //! Image related section */}
      <section className="w-1/2 hidden lg:block relative">
        <div className="max-h-screen">
          {/* //! Light image */}
          <Image
            src={lightBg}
            alt="Authentication"
            fill
            objectFit="cover"
            loading="lazy"
            className="block dark:hidden opacity-80"
          />
          {/* //! Dark image */}
          <Image
            src={darkBg}
            alt="Authentication"
            fill
            objectFit="cover"
            loading="lazy"
            className="hidden dark:block opacity-50"
          />
          {/* //! Text  */}

          <Link href="/" className="text-3xl font-bold absolute top-10 left-10">
            Curtains & Drapes
          </Link>

          <div className="absolute bottom-10 left-10">
            <p className="w-[80%] text-lg font-semibold">
              Transform your home with our exquisite collection of curtains,
              drapes, mattresses, pillows, and more. Sign up now for exclusive
              deals!
            </p>
          </div>
        </div>
      </section>

      {/* //! SignUp From section */}
      <section className="bg-background w-full lg:w-1/2 relative flex flex-col justify-center items-center">
        {/* //! Sign up page button */}
        <Link href="/login" className="hidden lg:block">
          <Button className="absolute top-10 right-10">Login</Button>
        </Link>

        {/* //! Top Text Section */}
        <div className="flex flex-col text-center space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h2>
          <p className="text-sm text-muted-foreground px-8">
            Please provide the required information marked with (
            <span className="text-red-600">*</span>) to set up your account.
          </p>
        </div>

        {/* //!SignUp Form */}

        <SignUpAuthForm />

        {/* //! Bottom text section */}
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {/* //! Hidden switching section for mobile devices */}
        <p className="px-8 text-center text-sm text-muted-foreground mt-3 block lg:hidden">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline underline-offset-4 hover:text-primary"
          >
            Login
          </Link>
        </p>
      </section>
    </section>
  );
};

export default SignUp;
