"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const LoginAuthForm = () => {
  //! visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="grid gap-6 my-5 w-[80%] md:w-1/2">
        <form>
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
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Input
                id="password"
                placeholder="****************"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <IoEyeOff className="h-5 w-5" />
                ) : (
                  <IoEye className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Submit button */}
            <Button>Log In with Email</Button>
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

export default LoginAuthForm;
