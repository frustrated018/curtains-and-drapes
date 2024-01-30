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
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginAuthForm = () => {
  //! Adding functionality using firebase

  //TODO: If user is present people shouldn't be able to access this page through the url
  //TODO: Add a loading and success state

  //! TODO: Need to add a loading state to stop the user from multiple requests.

  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const router = useRouter();

  //! handleing Email & password login logic
  const handleLogin = async (values) => {
    try {
      await signInWithEmailAndPassword(values.email, values.password);
    } catch (e) {
      console.log(e);
      toast.error(`${e}`, {
        theme: "colored",
      });
    }
  };

  //! Handleing google login
  const handleGoogleLogin = async (values) => {
    try {
      await signInWithGoogle(values.email, values.password);
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

            {/* Submit button */}
            <Button type="submit">Log In with Email</Button>
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
          <Button variant="outline" className="gap-2">
            <FaGithub />
            GitHub
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginAuthForm;
