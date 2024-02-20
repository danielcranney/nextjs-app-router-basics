"use client";
import Link from "next/link";

export default function Login() {
  return (
    <div className="auth-form-wrapper">
      <h2>Login</h2>

      <div className="switch-container">
        Login | <Link href="/signup">Sign up</Link>
      </div>
      <form className="mt-8" method="POST">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="e-mail address"
          autoComplete="email"
          required
        />

        <label htmlFor="password" className="mt-4">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          autoComplete="current-password"
          required
        />

        <button type="submit" className="btn-accent w-full mt-6">
          Login
        </button>

        <div className="forgotten-container">
          <a href="#" className="flex-2 underline">
            Forgot password?
          </a>

          <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
            or
          </p>

          <a href="#" className="flex-2 underline">
            Create an Account
          </a>
        </div>
      </form>
    </div>
  );
}
