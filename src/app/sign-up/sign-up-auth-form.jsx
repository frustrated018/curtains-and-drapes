"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";

const SignUpAuthForm = () => {
  //TODO: Add functionality using firebase
  //TODO: add image hosting for singup page to use as display photo

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  //! User Signin with email and password
  const handleEmailSignUp = async (values) => {
    console.log(values.email);
  };

  //* Form validation and submission with Formik

  // Initial Values
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // YUP validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Please enter your full name")
      .required("Your name is required"),
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
    onSubmit: handleEmailSignUp,
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
          {/* Name */}
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">
                Name <span className="text-red-600">*</span>
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                type="text"
                autoCapitalize="none"
                autoComplete="name"
                autoCorrect="off"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* //! Formik error messaage */}
              {formik.touched.name && formik.errors.name ? (
                <div className="text-sm text-red-500 h-4">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">
                Email <span className="text-red-600">*</span>
              </Label>
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
                <div className="text-sm text-red-500 h-4">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            {/* Password */}
            <div className="relative grid gap-2">
              <Label htmlFor="password">
                Password <span className="text-red-600">*</span>
              </Label>
              <Input
                id="password"
                placeholder="****************"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {/* Visibility Toggle */}
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
              <div className="text-sm text-red-500 h-8 sm:h-4">
                {formik.errors.password}
              </div>
            ) : null}

            {/* Photo //! Disabled temporarily */}
            {/* <div className="grid gap-2">
              <Label htmlFor="photo">Picture</Label>
              <Input id="photo" type="file" />
            </div> */}

            {/* submit button */}
            <Button type="submit">Sign up with Email</Button>
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
          <Button variant="outline" className="gap-2">
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

export default SignUpAuthForm;
