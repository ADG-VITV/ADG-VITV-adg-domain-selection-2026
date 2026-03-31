"use client";
import { auth } from "@/lib/firebase/config";
import { useContext, createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { IAuthContext } from "@/lib/types";


const provider = new GoogleAuthProvider();


const AuthContext = createContext<IAuthContext>({
  user: "loading",
  googleSignIn: () => Promise.resolve(),
  logOut: () => Promise.resolve(),
});

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<IAuthContext["user"]>("loading");

  // login function
  const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("SUCCESS:", result.user);
  } catch (error: any) {
    console.error("ERROR CODE:", error.code);
    console.error("ERROR MESSAGE:", error.message);
  }
};

  // logout function
  const logOut = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email?.endsWith("@vitstudent.ac.in")) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
