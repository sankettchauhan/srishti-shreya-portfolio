import React from "react";

export default function ContactMe() {
  return (
    <div className="max-w-lg mx-auto mt-16">
      <form
        action="mailto:shreyashristi08@gmail.com"
        method="POST"
        className="flex flex-col"
      >
        <h1 className="text-black text-4xl font-bold mb-6">Contact Me</h1>
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-fuchsia-600 p-3 mb-2 placeholder:text-fuchsia-600 focus:placeholder:text-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-fuchsia-600 p-3 mb-2 placeholder:text-fuchsia-600 focus:placeholder:text-black"
        />
        <textarea
          cols="20"
          rows="5"
          placeholder="Add a message"
          className="border-2 border-fuchsia-600 p-3 placeholder:text-fuchsia-600 focus:placeholder:text-black"
        />
        <button
          type="submit"
          className="mt-3 border-2 border-fuchsia-600 hover:text-white hover:bg-fuchsia-600 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
