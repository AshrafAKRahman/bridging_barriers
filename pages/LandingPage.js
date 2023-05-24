import LargeButton from "@/components/buttons/LargeButton";
import Header from "../components/Header";
import "@/app/globals.css";

const Landing = () => {
  return (
    <div className="relative">
      <Header
        titleClassName="text-5xl absolute left-0 top-20 transform translate-x-6 translate-y-58 text-blue-500"
        title="Welcome to the Bridging Barriers Portal"
      />
      <div className="mx-auto">
        <hr className="border-blue-500 border-2 mt-40 w-3/4 rounded" />
      </div>
      <div className="flex">
        <img
          className="ml-auto mr-10 w-2/6 mt-20 rounded-25 shadow-2xl"
          style={{ transform: "translate(-60px, -30px)" }}
          src="../Mentor.jpg"
          alt="Mentor Image"
        />
      </div>
      <div className="absolute inset-0 flex items-start justify-start flex-col ml-10 mt-80">
        <LargeButton className="mb-16" text="Create Profile" />
        <LargeButton text="Login" />
      </div>
    </div>
  );
};

export default Landing;
