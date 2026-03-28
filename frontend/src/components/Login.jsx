import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login({ setUser }) {

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      setUser({
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL
      });

    } catch (err) {
      console.error(err);
      alert("Login Failed");
    }
  };

  return (
    <div>
      <h3>Login to Continue</h3>
      <button onClick={handleLogin}>
        🔐 Sign in with Google
      </button>
    </div>
  );
}

export default Login;