import Link from "next/link";
import React from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { toast } from "react-toastify";

const LoginLogout = () => {
  // Moinitoring user login or signup
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);

  //! Handleing signout
  const handleSignout = async () => {
    try {
      const success = await signOut();

      if (success) {
        toast.success(`Log out successful`, {
          theme: "colored",
        });
      }
      if (error) {
        console.log(error);
        toast.error(`Logout Error: ${error}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {!user ? (
        <Link href="/login">
          <DropdownMenuItem>Login</DropdownMenuItem>
        </Link>
      ) : (
        <button onClick={handleSignout} className="w-full">
          <DropdownMenuItem>Log Out</DropdownMenuItem>
        </button>
      )}
    </>
  );
};

export default LoginLogout;
