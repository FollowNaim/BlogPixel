import { auth } from "@/firebase/firebase.config";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    console.log("inside unsubsribe", user);
    return () => unsubscribe();
  }, [user]);

  const googleProvider = new GoogleAuthProvider();

  const signWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const info = { signWithGoogle, user };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
