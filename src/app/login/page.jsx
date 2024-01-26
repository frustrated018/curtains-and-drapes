import Image from "next/image";
import LoginAuthForm from "./login-auth-form";
import lightBg from "@/assets/login-light.jpg";
import darkBg from "@/assets/login-dark.jpg";
import Link from "next/link";

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
            className="block dark:hidden opacity-85"
          />
          {/* //! Dark image */}
          <Image
            src={darkBg}
            alt="Authentication"
            fill
            objectFit="cover"
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
      <div className="bg-background w-full lg:w-1/2 relative">
        <LoginAuthForm />
      </div>
    </section>
  );
};

export default Login;
