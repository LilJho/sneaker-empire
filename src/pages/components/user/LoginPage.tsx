import React from "react";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";

const LoginPage = () => {
  return (
    <form className="p-8 text-left bg-white rounded-lg">
      <div className="flex flex-col my-4">
        <label>Email Address</label>
        <input type="text" className="border border-gray-400" />
      </div>
      <div className="flex flex-col my-4">
        <label>Password</label>
        <input type="password" className="border border-gray-400" />
      </div>
      <button
        type="submit"
        className="w-full mt-2 transition-colors border border-black hover:text-white hover:bg-slate-600"
      >
        Login
      </button>
      <div className="flex flex-col items-center justify-center gap-2 text-left">
        <label>Sign with</label>
        <div className="flex gap-2 text-2xl">
          <button className="text-blue-600 hover:scale-[1.2] transition-all">
            <FaFacebook />
          </button>
          <button className="text-red-500 hover:scale-[1.2] transition-all">
            <FaGooglePlus />
          </button>
        </div>
      </div>
      <button className="w-full mt-[4rem] text-white border border-black bg-slate-600 hover:text-black hover:bg-white transition-colors rounded">
        Create Account
      </button>
    </form>
  );
};

export default LoginPage;
