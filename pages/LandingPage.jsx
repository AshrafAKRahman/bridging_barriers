import LargeButton from "@/components/buttons/LargeButton";
import Header from "../components/header/Header";
import SubHeader from "@/components/subheader/subheader";

const Landing = () => {
  return (
    <div className="relative">
      <Header
        titleClassName="text-5xl absolute left-0 top-20 transform translate-x-6 translate-y-58 text-blue-500"
        title="Welcome to the Bridging Barriers Portal"
      />
      <div className="mx-auto">
        <hr className="mt-40 w-1/2 rounded bg-gradient-to-r from-blue-500 to-blue-100 h-8" />
      </div>

      <SubHeader
        titleClassName="text-3xl absolute left-40 transform translate-x-6 translate-y-10 text-blue-500"
        title="Developing lasting relationships"
      />
      <div className="flex">
        <div style={{ width: "100%", height: "400px" }}>
          <img
            className="ml-auto mr-10 mt-20 rounded-25 shadow-2xl"
            style={{
              transform: "translate(-60px, -90px)",
              objectFit: "cover",
              height: "100%",
            }}
            src="../Mentor.jpg"
            alt="Mentor Image"
          />
        </div>
      </div>

      <div
        className="absolute inset-0 flex items-start justify-start flex-col ml-40 mt-80"
        style={{ transform: "translate(-10px, 50px)" }}
      >
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
