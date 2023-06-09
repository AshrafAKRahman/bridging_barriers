import Form from "@/components/form/Form";
import { useState } from "react";
import Header from "@/components/header/Header";
import SubHeader from "@/components/subheader/subheader";
import Checkbox from "@/components/checkbox/checkbox";
import NormalButton from "@/components/buttons/NormalButton";
import Link from "next/link";

const CreateProfileSix = () => {
  const [isChecked1, setIsChecked1] = useState("false");
  const [isChecked2, setIsChecked2] = useState("false");
  const [isChecked3, setIsChecked3] = useState("false");
  const [isChecked4, setIsChecked4] = useState("false");
  const [isChecked5, setIsChecked5] = useState("false");
  const [isChecked6, setIsChecked6] = useState("false");
  const [isChecked7, setIsChecked7] = useState("false");
  const [isChecked8, setIsChecked8] = useState("false");
  const [isChecked9, setIsChecked9] = useState("false");

  return (
    <Form>
      <Header
        titleClassName="text-3xl absolute left:40 md:left-20 top-20 transform translate-x-6 translate-y-58 text-white"
        title="Equal opportunities"
      />
      <SubHeader
        titleClassName="text-2xl mt-20 text-white text-center mb-10 flex"
        title="Select your heritage & gender"
      />
      <p className="text-white">
        Ethical data collection Lorem ipsum dolor sit amet. Sed corrupti
        voluptas eum voluptas mollitia qui labore unde vel repellat dolore ut
        voluptas repellendus qui quia odio. Aut libero dicta eos facere
        reiciendis quo quos nostrum.
      </p>
      <div className="flex justify-between">
        <div className="w-1/2">
          <SubHeader
            titleClassName="text-2xl mt-10 text-gray-400 flex mb-2"
            title="Ethnic Heritage"
          />
          <Checkbox
            label="Mixed or multiple ethnic groups"
            onChange={(isChecked1) => setIsChecked1(isChecked1)}
            className="mb-3 text-white"
          />
          <Checkbox
            label="Asian or Asian British"
            onChange={(isChecked2) => setIsChecked2(isChecked2)}
            className="mb-3 text-white"
          />
          <Checkbox
            label="Black, African, Caribbean or Black British"
            onChange={(isChecked3) => setIsChecked3(isChecked3)}
            className="mb-3 text-white"
          />
          <Checkbox
            label="White, White British, White European or White other"
            onChange={(isChecked4) => setIsChecked4(isChecked4)}
            className="mb-3 text-white"
          />
          <Checkbox
            label="Self Describe"
            onChange={(isChecked5) => setIsChecked5(isChecked5)}
            className="mb-3 text-white"
          />
        </div>
        <div className="w-1/2">
          <SubHeader
            titleClassName="text-2xl mt-10 text-gray-400 flex"
            title="Gender"
            className="mb-3 text-white"
          />
          <Checkbox
            label="Male"
            onChange={(isChecked6) => setIsChecked6(isChecked6)}
            className="mb-3 text-white"
          />
          <Checkbox
            label="Female"
            onChange={(isChecked7) => setIsChecked7(isChecked7)}
            className="mb-3 text-white"
          />
          <Checkbox
            label="Non-Binary"
            onChange={(isChecked8) => setIsChecked8(isChecked8)}
            className="mb-3 text-white"
          />
          <Checkbox
            label="Self describe (please specify)"
            onChange={(isChecked9) => setIsChecked9(isChecked9)}
            className="mb-3 text-white"
          />
        </div>
      </div>
      <div className="mt-20">
        <Link className="mr-10" href="/CreateProfileFive">
          <NormalButton text="Previous" />
        </Link>
        <Link href="/CreateProfileSeven">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
};

export default CreateProfileSix;
