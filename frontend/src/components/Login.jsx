import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login({ setUser }) {

  const handleLogin = async () => {
  console.log("CLICKED"); // 👈 check if button works

  try {
    const result = await signInWithPopup(auth, provider);

    console.log("USER:", result.user); // 👈 check response

    setUser({
      name: result.user.displayName,
      email: result.user.email,
      photo: result.user.photoURL
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err); // 👈 IMPORTANT
    alert("Login Failed");
  }
};

  return (
    <div>
      <button onClick={handleLogin}>
  Login to Continue
</button>
      <button onClick={handleLogin}>
        🔐 Sign in with Google
      </button>
    </div>
  );
}

export default Login;