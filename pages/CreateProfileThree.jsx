import Checkbox from "@/components/checkbox/Checkbox";
import { useState } from "react";
import Form from "@/components/form/Form";
import Header from "@/components/header/Header";
import NormalButton from "@/components/buttons/NormalButton";
import Link from "next/link";

const CreateProfileThree = () => {
  // Define states for each checkbox
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);
  const [isChecked10, setIsChecked10] = useState(false);
  const [isChecked11, setIsChecked11] = useState(false);
  const [isChecked12, setIsChecked12] = useState(false);

  return (
    <Form>
      <Header
        titleClassName="text-3xl absolute left:40 md:left-20 top-20 transform translate-x-6 translate-y-58 text-black"
        title="industries"
      />
      <div className="flex flex-wrap mt-20">
        <div className="w-1/4 mb-10">
          <img
            src="Accounting.jpg"
            alt="Accounting"
            className="rounded-img mb-5 w-[60px] h-[60px]"
          />
          <Checkbox
            label="Accounting"
            onChange={(isChecked) => setIsChecked1(isChecked)}
          />
        </div>

        <div className="w-1/4 mb-10">
          <img
            src="Banking_Finance.jpg"
            alt="Banking & Finance"
            className="rounded-img mb-5 w-[60px] h-[60px]"
          />
          <Checkbox
            label="Banking & Finance"
            onChange={(isChecked) => setIsChecked2(isChecked)}
          />
        </div>

        <div className="w-1/4 mb-10">
          <img
            src="Consulting.jpg"
            alt="Consulting"
            className="rounded-img mb-5 w-[60px] h-[60px]"
          />
          <Checkbox
            label="Consulting"
            onChange={(isChecked) => setIsChecked3(isChecked)}
          />
        </div>
        <div className="w-1/4 mb-10">
          <img
            src="Marketing.jpg"
            alt="Marketing"
            className="rounded-img mb-5 w-[60px] h-[60px]"
          />
          <Checkbox
            label="Marketing"
            onChange={(isChecked) => setIsChecked4(isChecked)}
          />
        </div>
        <div className="w-1/4 mb-10">
          <img
            src="Education.jpg"
            alt="Education"
            className="rounded-img mb-5 w-[60px] h-[60px]"
          />
          <Checkbox
            label="Education"
            onChange={(isChecked) => setIsChecked5(isChecked)}
          />
        </div>
        <div className="w-1/4 mb-10">
          <img
            src="Engineering.jpg"
            alt="Engineering"
            className="rounded-img mb-5 w-[60px] h-[60px]"
          />
          <Checkbox
            label="Engineering"
            onChange={(isChecked) => setIsChecked6(isChecked)}
          />
        </div>
        <div className="w-1/4 mb-10">
          <img
            src="Governemnt_Public.jpg"
            alt="Government"
            className="rounded-img mb-5 w-[60px] h-[60px]"
          />
          <Checkbox
            label="Government & Public Sector"
            onChange={(isChecked) => setIsChecked7(isChecked)}
          />
        </div>
        <div className="w-1/4 mb-10">
          <img
            src="Healthcare.jpg"
            alt="Banking & Finance"
            className="rounded-img mb-5 w-[60px] h-[60px]"
          />
          <Checkbox
            label="Healthcare"
            onChange={(isChecked) => setIsChecked8(isChecked)}
          />
        </div>
        <div className="w-1/4 mb-10">
          <img
            src="Real Estate.jpg"
            alt="Real Estate"
            className="rounded-img mb-5 w-[60px] h-[60px]"
          />
          <Checkbox
            label="Real Estate"
            onChange={(isChecked) => setIsChecked9(isChecked)}
          />
        </div>
        <div className="w-1/4 mb-10">
          <img
            src="Law.jpg"
            alt="Law"
            className="rounded-img mb-5 w-[60px] h-[60px]"
          />
          <Checkbox
            label="Law"
            onChange={(isChecked) => setIsChecked10(isChecked)}
          />
        </div>
        <div className="w-1/4 mb-10">
          <img
            src="Technology.jpg"
            alt="Technology"
            className="rounded-img mb-5 w-[60px] h-[60px]"
          />
          <Checkbox
            label="Banking & Finance"
            onChange={(isChecked) => setIsChecked11(isChecked)}
          />
        </div>
        <div className="w-1/4 mb-10">
          <img
            src="Media-_-Music_1.jpg"
            alt="Media_Music"
            className="rounded-img mb-5 w-[60px] h-[60px]"
          />
          <Checkbox
            label="Banking & Finance"
            onChange={(isChecked) => setIsChecked12(isChecked)}
          />
        </div>
      </div>
      <div className="mt-10">
        <Link className="mr-10" href="/CreateProfileTwo">
          <NormalButton text="Previous" />
        </Link>
        <Link href="/CreateProfileFour">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
};

export default CreateProfileThree;
