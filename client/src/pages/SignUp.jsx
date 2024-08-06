import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate;
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
      setLoading(true);
      if(!formData.username || !formData.email || !formData.password){
        setLoading(false);
        setError("All fields are required");
        return;
      }
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in')
    } catch (error) {
      console.log(error);
      
      setLoading(false);
      setError(error.message);
    }

    // console.log(data);
  };
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="font-semibold my-7 text-center">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border rounded-lg p-3 "
          onChange={handleChange}
        />
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
        {!loading ? "Sign Up" : "Loading..."}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account ?</p>
        <Link className="text-blue-700" to={"/sign-in"}>
          <span>Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-400 mt-5">{error}</p>}
    </div>
  );
}

export default SignUp;
