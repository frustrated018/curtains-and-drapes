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
          {/* //TODO: image is missing position and sizes prop */}
          <Image
            src={lightBg}
            alt="Authentication"
            className="block dark:hidden opacity-80 h-screen object-cover"
          />
          {/* //! Dark image */}
          <Image
            src={darkBg}
            alt="Authentication"
            loading="lazy"
            className="hidden dark:block opacity-50 h-screen object-cover"
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
      <section className="bg-background w-full lg:w-1/2 relative flex flex-col justify-center items-center py-5 lg:py-10">
        {/* //! Sign up page button */}
        <Link href="/login" className="hidden 2xl:block">
          <Button className="absolute top-10 right-10">Login</Button>
        </Link>

        {/* //! Top Text Section */}
        <div className="flex flex-col text-center space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h2>
          <p className="text-sm text-muted-foreground px-10 lg:px-20 xl:px-10">
            Please provide the required information marked with (
            <span className="text-red-600">*</span>) to set up your account.
          </p>
        </div>

        {/* //!SignUp Form */}

        <SignUpAuthForm />

        {/* //! Bottom text section */}
        <p className="px-10 lg:px-20 xl:px-10 text-center text-sm text-muted-foreground">
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

        {/* //! Hidden switching section for devices smaller than 1500 px */}
        <p className="px-8 text-center text-sm text-muted-foreground my-3 block 2xl:hidden">
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
