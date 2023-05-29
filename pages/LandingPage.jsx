import LargeButton from "@/components/buttons/LargeButton";
import Header from "../components/header/Header";
import SubHeader from "@/components/subheader/subheader";

const Landing = () => {
  return (
    <div className="relative">
      <Header
        titleClassName="text-lg absolute left-0 right-10 top-10 transform translate-x-6 translate-y-58 text-blue-500"
        title="Welcome to the Bridging Barriers Portal"
      />
      <div className="mx-auto">
        <hr className="mt-40 w-1/2 rounded bg-gradient-to-r from-blue-500 to-blue-100 h-8" />
      </div>

      <SubHeader
        titleClassName="text-3xl absolute left-0  mt-10 text-blue-500"
        title="Developing lasting relationships"
      />
      <div className="w-full md:w-1/2 hidden md:block">
        <img
          className="mx-auto md:ml-auto md:mr-10 mt-20 rounded-25 shadow-2xl"
          style={{
            transform: "translateY(-90px)",
            objectFit: "cover",
            height: "400px",
          }}
          src="../Mentor.jpg"
          alt="Mentor Image"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start justify-start mt-60 md:mt-80 ml-20">
        <LargeButton
          className="mb-16 shadow-2xl"
          text="Create Profile"
          href="/CreateProfileOne"
        />
        <LargeButton
          className="shadow-2xl"
          text="Login"
          href="@/pages/CreateProfileOne"
        />
      </div>
    </div>
  );
};

export default Landing;
