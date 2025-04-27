import { auth } from "@/firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("inside unsubsribe", user);
      setUser(user);
    });
    return () => unsubscribe();
  }, [user]);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
