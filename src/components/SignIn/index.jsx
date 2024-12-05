import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import GoogleButton from "react-google-button";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const { register ,SignInGoogle} = useAuth();
  const { signIn } = useAuth();
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  async function hindlieRegisters() {
    try {
      await register(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  }
  async function hindleSignIn() {
    try {
      await signIn(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  }

  return (
    <div>
      <div className="w-[600px] h-[460px] bg-[white] absolute  mx-[30%] mt-[10%] rounded-[20px] flex  z-[22] items-center justify-center flex-col gap-[20px]">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="z-[10] py-[10px] w-[300px] pl-[15px] outline-none text-[F57520 border-solid border-[2px] rounded-lg border-[#F57520] placeholder:text-[#F57520] text-[#F57520] "
          type="text"
          placeholder="    Email "
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="z-[10] py-[10px] w-[300px] pl-[15px] outline-none text-[F57520 border-solid border-[2px] rounded-lg border-[#F57520] placeholder:text-[#F57520] text-[#F57520]"
          type="password"
          placeholder="    Password"
        />
        <div className="flex items-center justify-between gap-[20px]">
          {" "}
          <button
            onClick={hindlieRegisters}
            className="w-[200px] py-[10px] text-white bg-[black] cursor-pointer z-[10] rounded-[10px]"
          >
            Register
          </button>{" "}
          <button
            onClick={hindleSignIn}
            className="w-[200px] py-[10px] text-white bg-[#F57520] cursor-pointer z-[10] rounded-[10px]"
          >
            Sign In
          </button>
        </div>
        <GoogleButton
  type="light" // can be light or dark
 onClick={()=>SignInGoogle()}
/>
      </div>
    </div>
  );
};

export default SignIn;
