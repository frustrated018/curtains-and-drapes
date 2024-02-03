"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";

const SignUpAuthForm = () => {
  //! Added functionality using firebase & Posting user data to MongoDB Database
  const [user, loading] = useAuthState(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();

  //! User Signin with email and password
  const handleEmailSignUp = async (values) => {
    setFormSubmitted(true);
    const data = new FormData();
    data.append("image", values.photo);

    try {
      //! Uploading photo to Image bb
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IBB_API_KEY}`,
        {
          method: "POST",
          body: data,
        }
      );
      const imageData = await response.json();

      //! Sending user data to the database

      const newUser = {
        email: values.email,
        username: values.name,
        photoURL: imageData?.data?.url,
      };
      // console.log(newUser);
      const dbPost = await fetch(`/api/users`, {
        method: "POST",
        body: JSON.stringify(newUser),
      });

      const dbData = await dbPost.json();

      if (dbData.user) {
        setPostSuccess(true);
      }
      // console.log(dbData);

      //! Creating User
      const res = await createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      //! Updating user Profile image and display name
      const displayName = values.name;
      const success = await updateProfile({
        displayName,
        photoURL: imageData?.data?.url || "", //? for more safety?
      });
      setUpdateSuccess(success);
    } catch (e) {
      toast.error(`Catch Block Error: ${e}`, {
        theme: "colored",
      });
      console.error(e);
    }
  };

  //! Handleing google login
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();

      // Using an onAuthStateChanged listener to wait for the user to be updated
      const unsubscribe = auth.onAuthStateChanged((updatedUser) => {
        if (updatedUser) {
          const newUser = {
            email: updatedUser.email,
            username: updatedUser.displayName,
            photoURL: updatedUser.photoURL,
          };

          console.log("Updated user: ", updatedUser);
          console.log("new user: ", newUser);

          // making api call to post user to database
          const postUserToDatabase = async () => {
            try {
              const dbPost = await fetch(`/api/users`, {
                method: "POST",
                body: JSON.stringify(newUser),
              });

              const dbData = await dbPost.json();

              if (dbData.user) {
                setPostSuccess(true);
              }
            } catch (error) {
              console.error("Error posting user to the database:", error);
            }
          };

          //* Posting user and callling unsubscribe to avoid memory leaks
          postUserToDatabase();
          unsubscribe();
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  //! Handleing Github login
  const handleGithubLogin = async () => {
    try {
      await signInWithGithub();
      // TODO: need to post users in db
    } catch (e) {
      console.log(e);
    }
  };

  //! Conditions for successful and failed signup attempts
  useEffect(() => {
    if (user) {
      // * For form submission
      if (formSubmitted && postSuccess && updateSuccess) {
        //! routing to home
        // router.push("/");

        //* Showing success toast
        toast.success(
          `Hi ${
            user.displayName ? user.displayName : "User"
          }! Welcome to our site`,
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
      }

      // * Social login
      if (!formSubmitted && postSuccess) {
        //! routing to home
        // router.push("/");

        //* Showing success toast
        toast.success(
          `Hi ${
            user.displayName ? user.displayName : "User"
          }! Welcome to our site`,
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
      }
    }
  }, [user, router, updateSuccess, postSuccess, formSubmitted]);

  //* Form validation and submission with Formik
  // Initial Values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    photo: "",
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
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
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
                <div className="text-sm text-red-500">{formik.errors.name}</div>
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
                <div className="text-sm text-red-500">
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
              <div className="text-sm text-red-500">
                {formik.errors.password}
              </div>
            ) : null}

            {/* Photo upload */}
            <div className="grid gap-2">
              <Label htmlFor="photo">Picture</Label>
              <Input
                id="photo"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  // console.log(event.target.files);
                  formik.setFieldValue("photo", event.currentTarget.files[0]);
                }}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* Conditional submit button */}
            {formSubmitted || loading ? (
              <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit">Sign up with Email</Button>
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

export default SignUpAuthForm;
