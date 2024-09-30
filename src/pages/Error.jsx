import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl font-bold text-red-400">Error ‼</h1>
          <p className="text-2xl font-semibold">Something went wrong...</p>
        </div>

        <Link
          to="/"
          className="rounded-xl border bg-black p-4 text-2xl font-bold text-white"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
