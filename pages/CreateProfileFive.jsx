import Header from "@/components/header/Header";
import Checkbox from "@/components/checkbox/checkbox";
import { useState } from "react";
import Form from "@/components/form/Form";
import NormalButton from "@/components/buttons/NormalButton";
import Link from "next/link";

const CreateProfileFive = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  return (
    <Form>
      <Header
        titleClassName="text-3xl absolute left:40 md:left-20 top-40 transform translate-x-6 traslate-y-58 text-white"
        title="Membership type"
      />
      <div className="w-1/4 mt-60">
        <div className="mb-10">
          <Checkbox
            label="Blogger"
            onChange={(isChecked1) => setIsChecked1(isChecked1)}
            className="text-white"
          />
        </div>
        <div className="mb-10">
          <Checkbox
            label="Mentee"
            onChange={(isChecked2) => setIsChecked2(isChecked2)}
            className="text-white"
          />
        </div>
        <div className="mb-10">
          <Checkbox
            label="Mentor"
            onChange={(isChecked3) => setIsChecked3(isChecked3)}
            className="text-white"
          />
        </div>

        <Checkbox
          label="Events"
          onChange={(isChecked4) => setIsChecked4(isChecked4)}
          className="text-white"
        />
      </div>
      <div className="mt-20">
        <Link className="mr-10" href="/CreateProfileFour">
          <NormalButton text="Previous" />
        </Link>
        <Link href="/CreateProfileSix">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
};
export default CreateProfileFive;
