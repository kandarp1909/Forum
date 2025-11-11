import React, { useState } from "react";
import { signIn, signUp } from "../lib/auth";
import { Link } from "react-router-dom";

export default function AuthForm({
  mode = "signin",
  onSuccess,
}: {
  mode?: "signin" | "signup";
  onSuccess?: () => void;
}) {
  const [m, setM] = useState(mode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (m === "signin") {
      const res = await signIn(email, password);
      setLoading(false);
      if (res.ok) {
        onSuccess?.();
      } else setError(res.message);
    } else {
      const res = await signUp(email, password);
      setLoading(false);
      if (res.ok) {
        onSuccess?.();
      } else setError("Could not sign up");
    }
  };

  return (
    <div >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">
          {m === "signin" ? "Sign in" : "Create account"}
        </h3>
        <div
          className="text-sm text-[color:var(--muted)] cursor-pointer"
          onClick={() => setM(m === "signin" ? "signup" : "signin")}
        >
          {m === "signin" ? "Create an account" : "Have an account?"}
        </div>
      </div>
      <form onSubmit={submit} className="space-y-3">
        <input
          className="w-full bg-transparent border border-white/8 rounded px-3 py-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full bg-transparent border border-white/8 rounded px-3 py-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        {error && <div className="text-sm text-red-400">{error}</div>}
        <div className="flex justify-between">
          {/* <div className="text-sm text-[color:var(--muted)] cursor-pointer items-center">
            Back to home
          </div> */}
          <Link
            to="/"
            className="text-sm text-[color:var(--muted)] cursor-pointer items-center"
          >
            Back to home
          </Link>
          <button
            className="px-4 py-2 rounded-md bg-black text-white"
            disabled={loading}
          >
            {loading ? "..." : m === "signin" ? "Sign in" : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
}
