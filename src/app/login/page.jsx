import Image from "next/image";
import LoginAuthForm from "./login-auth-form";
import lightBg from "@/assets/login-light.jpg";
import darkBg from "@/assets/login-dark.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Login = () => {
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
            className="block dark:hidden opacity-85"
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
              Unlock a world of comfort and style. Join us to discover the
              finest home essentials for a truly inviting space.
            </p>
          </div>
        </div>
      </section>

      {/* //! Login From section */}
      <section className="bg-background w-full lg:w-1/2 relative flex flex-col justify-center items-center py-5 lg:py-10">
        {/* //! Sign up page button */}
        <Link href="/sign-up" className="hidden 2xl:block">
          <Button className="absolute top-10 right-10">Sign Up</Button>
        </Link>

        {/* //! Top Text Section */}
        <div className="flex flex-col text-center space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Welcome Back!
          </h2>
          <p className="text-sm text-muted-foreground px-8">
            Enter your email and password to log in to your account.
          </p>
        </div>

        {/* //!Login Form */}
        <LoginAuthForm />

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
        <p className="px-8 text-center text-sm text-muted-foreground my-3 block 2xl:hidden">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign Up
          </Link>
        </p>
      </section>
    </section>
  );
};

export default Login;
