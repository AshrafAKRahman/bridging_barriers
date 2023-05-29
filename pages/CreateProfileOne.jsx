import NormalButton from "@/components/buttons/NormalButton.jsx";
import Header from "../components/header/Header";
import { useState } from "react";
import "@/styles/globals.css";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email: ", email);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "90vh", // Setting the parent element's height to fill the viewport
      }}
    >
      <div className="mb-10">
        <Header
          titleClassName="text-5xl absolute left-20 top-40 transform translate-x-6 translate-y-58 text-black"
          title="Create Your Profile"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-100 rounded-lg p-8 mt-10 ml-20 mr-20"
        style={{
          flex: 1, // Use flex: 1 to allow the form to take up remaining vertical space
          width: "80%",
          borderRadius: "20px",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div className="md:flex md:items-center mt-40">
          <div className="md:w-1/6">
            <label
              className="block text-black font-bold mb-1 md:mb-0 pr-6"
              htmlFor="inline-email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 rounded w-80 py-2 px-4 text-gray-700 border border-black"
              id="inline-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="mt-20">
          <NormalButton text="Next" />
        </div>
      </form>
    </div>
  );
}
