import React from "react";
import { Link } from "react-router-dom";

export default function Header({
  authed,
  onSignOut,
  userEmail,
}: {
  authed: boolean;
  onSignOut: () => void;
  userEmail?: string;
}) {
  return (
    <header className="flex items-center justify-between py-3">
      <Link to="/" className="flex items-center gap-3">
        <div
          style={{
            width: "30px",
            height: "22px",
            border: "2px solid black",
            borderRadius: "10px",
          }}
        >
          <span
            className=" w-[5px] h-[5px]
  rounded-full
  border border-black
  bg-black
  absolute
  left-[44px] top-[50px]"
          ></span>
        </div>
        <div>
          <div className="text-2xl font-semibold">foo-rum</div>
          {/* <div className="text-sm text-[color:var(--muted)]">Figma-inspired minimal feed</div> */}
        </div>
      </Link>
      <div className="flex items-center gap-4">
        {authed ? (
          <div className="flex items-center gap-3">
            <div className="text-sm text-[color:var(--muted)]">{userEmail}</div>
            <button
              className="px-3 py-1 rounded-md bg-[color:var(--glass)]"
              onClick={onSignOut}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="text-black hover:font-bold">
            <Link
              to="/signin"
              className="text-black "
            >
              Sign in
            </Link>
            <span>/</span>
            <Link
              to="/signup"
              className="text-black hover:font-bold"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
