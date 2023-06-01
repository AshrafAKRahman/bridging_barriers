import NormalButton from "@/components/buttons/NormalButton";
import Header from "@/components/header/Header";
import Form from "@/components/form/form";
import { useState } from "react";
import Link from "next/link";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email: ", email);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Header
        titleClassName="text-3xl absolute left:40 md:left-20 top-40 transform translate-x-6 translate-y-58 text-white"
        title="Create Your Profile"
      />
      <div className="md:flex md:items-center mt-60">
        <div className="md:w-1/6">
          <label className="text-white" htmlFor="inline-email">
            Email address
          </label>
        </div>
        <div className="">
          <input
            className="bg-gray-200 rounded w-full py-4 px-4 text-gray-700 border border-black"
            id="inline-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="mt-10">
        <p className="text-blue-500 underline font-sans">
          Already have an account? <Link href="/login">Login here</Link>
        </p>
      </div>
      <div className="mt-20">
        <Link href="/CreateProfileTwo">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
}
