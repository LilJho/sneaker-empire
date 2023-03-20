import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center pt-[2rem] bg-white rounded-lg min-h-[30rem] min-w-[20rem]">
      <div className=" min-h-[15rem] min-w-[10rem]">
        <form>
          <div className="flex flex-col">
            <label>Email Address</label>
            <input type="text" className="border border-gray-400" />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input type="password" className="border border-gray-400" />
          </div>
          <button
            type="submit"
            className="w-full mt-2 border border-black hover:text-white hover:bg-slate-600"
          >
            Login
          </button>
        </form>
        <button className="w-full mt-[4rem] text-white border border-black bg-slate-600 hover:text-black hover:bg-white">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
