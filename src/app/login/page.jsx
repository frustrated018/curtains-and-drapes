import Image from "next/image";
import LoginAuthForm from "./login-auth-form";
import lightBg from "@/assets/login-light.jpg";
import darkBg from "@/assets/login-dark.jpg";

const Login = () => {
  return (
    <section className="w-full min-h-screen max-w-screen-2xl mx-auto flex">
        {/* //! Image related section */}
      <section className="w-1/2 hidden lg:block">
        <div className="max-h-screen">
          {/* //! Light image */}
          <Image
            src={lightBg}
            alt="Authentication"
            fill
            objectFit="cover"
            className="block dark:hidden opacity-75"
          />
          {/* //! Dark image */}
          <Image
            src={darkBg}
            alt="Authentication"
            fill
            objectFit="cover"
            className="hidden dark:block opacity-75"
          />
          {/* //! Text  */}

        </div>
      </section>
      <div className="bg-background w-full lg:w-1/2 relative">
        <LoginAuthForm />
      </div>
    </section>
  );
};

export default Login;
