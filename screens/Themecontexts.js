import React, { createContext, useState } from "react";
import { EmailAuthCredential, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const auth = FIREBASE_AUTH 
  const [dark, setDark] = useState(false);
  const changeIntoDarkMode = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ 
        dark, 
        changeIntoDarkMode, 
        signUp: async(email, password)=>{
            try {
                const response = await createUserWithEmailAndPassword(auth, email, password);
                console.log(response);
                
            } catch (error) {
                console.log(error);
            }
        },
        signIn: async(email, password)=>{
            try {
                const response = await signInWithEmailAndPassword(auth, email, password);
                console.log(response);
            } catch(error) {
                console.log(error);
            }
        }
        }}>
      {children}
    </ThemeContext.Provider>
  );
};
