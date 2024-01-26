import LoginAuthForm from "./login-auth-form";

const Login = () => {
  return (
    <section className="flex w-full">
      <section className="w-1/2">This will be 1/2</section>
      <div className="w-1/2">
        <LoginAuthForm />
      </div>
    </section>
  );
};

export default Login;
