import { useState } from "react";
import NormalButton from "@/components/buttons/NormalButton";
import Link from "next/link";
import Header from "@/components/header/Header";
import Form from "@/components/form/form";

export default function CreateProfileForm() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isCheckedOne, setIsCheckedOne] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Your details have been submitted");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="mb-10">
        <Header
          titleClassName="text-3xl absolute left:40 md:left-20 top-40 transform translate-x-6 translate-y-58 text-black"
          title="Enter your details"
        />
      </div>
      <div className="md:flex md:items-center space-y-4 mt-40 mb-8">
        <div className="md:w-1/2 pr-8">
          <div className="mb-10">
            <label className="text-black" htmlFor="inline-name">
              First name
            </label>
            <input
              className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-black w-full"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-10">
            <label className="text-black" htmlFor="inline-name">
              Last name
            </label>
            <input
              className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-black w-full"
              type="text"
              placeholder="Enter your last name"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="mt-10">
            <label className="text-black" htmlFor="inline-name">
              UK Mobile number
            </label>
            <input
              className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-black w-full"
              type="text"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="md:w-1/2 ml-20">
          <label className="flex items-center space-x-4 mb-20">
            <input
              type="checkbox"
              checked={isCheckedOne}
              onChange={(e) => setIsCheckedOne(e.target.checked)}
            />
            <span>Send me emails and I wish to subscribe to newsletters</span>
          </label>
          <label className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={isCheckedTwo}
              onChange={(e) => setIsCheckedTwo(e.target.checked)}
            />
            <span>
              Privacy, terms and conditions data agreement Lorem ipsum dolor sit
              amet. Sed corrupti voluptas eum voluptas mollitia qui labore unde
              vel repellat dolore ut voluptas repellendus qui quia odio. Aut
              libero dicta eos facere reiciendis quo quos nostrum.
            </span>
          </label>
        </div>
      </div>
      <div className="mt-20">
        <Link className="mr-10" href="/CreateProfileOne">
          <NormalButton text="Previous" />
        </Link>
        <Link href="/CreateProfileThree">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
}
