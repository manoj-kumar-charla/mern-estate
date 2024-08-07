import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
function SignIn() {
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
    // console.log(formData);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // console.log(data.message);

        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      // console.log(error);

      dispatch(signInFailure(error.message));
    }

    // console.log(data);
  };
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="font-semibold my-7 text-center">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="email"
          id="email"
          className="border rounded-lg p-3 "
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="border rounded-lg p-3 "
          onChange={handleChange}
        />
        <button className="border rounded-lg p-3 bg-slate-700 text-white uppercase hover:opacity-95 disabled:opacity-80">
          {!loading ? "Sign In" : "Loading..."}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account ?</p>
        <Link className="text-blue-700" to={"/sign-up"}>
          <span>Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-400 mt-5">{error}</p>}
    </div>
  );
}

export default SignIn;
