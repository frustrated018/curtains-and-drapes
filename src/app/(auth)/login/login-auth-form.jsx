"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";

const LoginAuthForm = () => {
  //! Adding functionality using firebase

  //TODO: If user is present people shouldn't be able to access this page through the url

  const [user, loading] = useAuthState(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const router = useRouter();

  //! handleing Email & password login logic
  const handleLogin = async (values) => {
    setFormSubmitted(true);
    try {
      await signInWithEmailAndPassword(values.email, values.password);
    } catch (e) {
      console.log(e);
      toast.error(`${e}`, {
        theme: "colored",
      });
    }
  };

  //! Handling google login
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (e) {
      console.log(e);
    }
  };

  //! Handling Github login
  const handleGithubLogin = async () => {
    try {
      await signInWithGithub();
    } catch (e) {
      console.log(e);
    }
  };

  //! Conditions for successful and failed login attempts
  useEffect(() => {
    if (user) {
      toast.success(
        `Hi ${user.displayName ? user.displayName : "User"}! Welcome back.`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        }
      );
      //! Redirecting the user
      router.push("/");
    }
  }, [user, router]);

  //! Formik Logic
  //* Form validation and submission with Formik
  // Initial Values
  const initialValues = {
    email: "",
    password: "",
  };

  // YUP validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
        "Password must contain at least one uppercase letter and one special character"
      )
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleLogin,
  });

  //! visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="grid gap-6 my-5 w-[80%] md:w-1/2">
        <form onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* //! Formik error messaage */}
              {formik.touched.email && formik.errors.email ? (
                <div className="text-sm text-red-500">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            {/* Password */}
            <div className="relative grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="****************"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 pr-3 pb-2 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <IoEye className="h-5 w-5" />
                ) : (
                  <IoEyeOff className="h-5 w-5" />
                )}
              </button>
            </div>
            {/* //! Formik error messaage */}
            {formik.touched.password && formik.errors.password ? (
              <div className="text-sm text-red-500">
                {formik.errors.password}
              </div>
            ) : null}

            {/* Conditional submit button */}
            {formSubmitted || loading ? (
              <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit">Log in with Email</Button>
            )}
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="flex gap-4 mx-auto ">
          <Button
            variant="outline"
            className="gap-2"
            onClick={handleGoogleLogin}
          >
            <FcGoogle />
            Google
          </Button>
          <Button
            variant="outline"
            className="gap-2"
            onClick={handleGithubLogin}
          >
            <FaGithub />
            GitHub
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginAuthForm;
