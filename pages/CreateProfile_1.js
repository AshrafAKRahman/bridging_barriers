import LargeButton from "@/components/buttons/LargeButton";
import NormalButton from "@/components/buttons/NormalButton";
import Header from "../components/Header";
import SubHeader from "@/components/subheader";
import { useState } from "react";
import "@/app/globals.css";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email: ", email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-500 rounded-lg p-8 mt-10 ml-20 mr-20"
      style={{
        width: "80%",
        height: "20%",
        borderRadius: "20px",
        paddingTop: "5px",
        paddingBottom: "5px",
      }}
    >
      <div className="md:flex md:items-center mt-50">
        <div className="md:w-1/3">
          <label
            className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-email"
          >
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="inline-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-blue-700 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}
