"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "@/config/firebaseConfig";
import { toast } from "sonner";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const defaultPic = "/assets/user-icon.png";

const Navbar = () => {
  const { isAuth } = useGetUserInfo();

  const [user] = useAuthState(auth);

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);

    const authInfo = {
      userId: results.user.uid,
      userEmail: results.user.email,
      name: results.user.displayName,
      isAuth: true,
      photoURL: results.user.photoURL,
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("auth", JSON.stringify(authInfo));
    }

    window.location.reload();

    toast("Signed in successfully");
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);

      if (typeof window !== "undefined") {
        localStorage.clear();
      }

      window.location.reload();

      toast("Logged out successfully.");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    //Make the navbar sticky

    <div className="sticky top-0 z-50 bg-black text-white flex justify-between items-center py-5 px-4 md:px-8">
      <div className="text-lg font-semibold">
        <Link href={"/"}>TXTSum</Link>
      </div>

      {isAuth ? (
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link
            href="/summarize"
            className="hover:bg-white hover:text-black transition duration-300 ease-in-out px-4 py-2 rounded-md"
          >
            Summarize
          </Link>

          <Link
            href="/history"
            className="hover:bg-white hover:text-black transition duration-300 ease-in-out px-4 py-2 rounded-md"
          >
            History
          </Link>

          {/* Log out button should show logged-in user profile picture on hover */}

          <div className="relative group flex items-center">
            {user?.photoURL && (
              <img
                src={user?.photoURL || defaultPic}
                alt="profile"
                className="hidden group-hover:block absolute -left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border border-gray-400 transition-opacity duration-200 ease-in-out"
              />
            )}

            <Button
              onClick={signUserOut}
              className="hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out px-4 py-2 rounded-md"
            >
              Log Out
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Button onClick={signInWithGoogle}>Sign In</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
