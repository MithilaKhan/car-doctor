import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {
 
         const [user , setUser] = useState(null)
         const [loading , setLoading] = useState(true)

         // signUp 
const signUp =(email, password)=>{
   setLoading(true)
   return  createUserWithEmailAndPassword(auth, email, password)
   
}

      // login
const login =(email, password)=>{
   setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
}

      // sign Out 
const logout =()=>{
   setLoading(true)
   return signOut(auth)
}

useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth , currentUser=>{
      setUser(currentUser)
      console.log("current user" ,currentUser );
      setLoading(false)
   })
   return () =>{
      return unsubscribe()
   }
} ,[])

   const AuthInfo ={
         user ,
         loading,
         signUp ,
         login ,
         logout
   }
   return (
      <AuthContext.Provider value={AuthInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;