// src/pages/Auth.jsx
import React, { useState } from "react";
import { auth } from "../services/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // true => Login | false => Signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        // alert("Login Successful!");
        navigate("/home");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup Successful!");
      }
      // Redirect to dashboard or homepage if needed
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Breadcrumb />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl mb-6 font-bold">
          {isLogin ? "Firebase Login" : "Firebase Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="w-80">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <Button type="submit" disabled={loading}>
            {loading
              ? isLogin
                ? "Logging in..."
                : "Signing up..."
              : isLogin
              ? "Login"
              : "Sign Up"}
          </Button>
        </form>
        <p className="mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 ml-2 underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </>
  );
};

export default Auth;
