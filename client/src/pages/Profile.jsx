import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-center text-3xl my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile photo"
          className="rounded-full h-24 w-24 self-center object-cover cursor-pointer mt-2"
        />
        <input
          type="text"
          id="username"
          placeholder="username"
          className="rounded-lg border p-3"
        />
        <input
          type="email"
          id="email"
          placeholder="email"
          className="rounded-lg border p-3"
        />
        <input
          type="text"
          id="password"
          placeholder="password"
          className="rounded-lg border p-3"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}

export default Profile;
