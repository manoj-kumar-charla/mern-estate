import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="font-semibold my-7 text-center">Sign Up</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border rounded-lg p-3 "
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          className="border rounded-lg p-3 "
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="border rounded-lg p-3 "
        />
        <button  className="border rounded-lg p-3 bg-slate-700 text-white uppercase hover:opacity-95 disabled:opacity-80">Sign Up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account ?</p>
        <Link className="text-blue-700" to={'/sign-in'}>
          <span>Sign In</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
