import Header from "@/components/header/Header";
import Checkbox from "@/components/checkbox/checkbox";
import { useState } from "react";
import Form from "@/components/form/Form";
import NormalButton from "@/components/buttons/NormalButton";
import Link from "next/link";

const CreateProfileFive = () => {
  const [isChecked, setIsChecked] = useState(new Array(12).fill(false));

  const handleCheckboxChange = (index, value) => {
    const newIsChecked = [...isChecked];
    newIsChecked[index] = value;
    setIsChecked(newIsChecked);
  };

  const labels = [
    "Eligible for free school meals during secondary or further education",
    "A looked after young person or Care leaver",
    "A young Carer to immediate family member or a young parent below 21",
    "Identify as working class or low income background",
    "Caretakers not attending university",
    "Self-identifying as a person of colour (including mixed heritage)",
    "Self-identifying as estranged in adulthood",
    "Migrating to the uk after 5 years of age",
    "English as an additional language",
    "Recieving full maintenance loan at university",
    "Self-identifying as disabled or experienced significant disruption to your education due to illness or injury",
    "Experienced other significant personal or familal disadvantage that has impacted education or employment (for example, bereavement)",
  ];

  return (
    <Form>
      <Header
        titleClassName="text-3xl absolute left:40 md:left-20 top-20 transform translate-x-6 traslate-y-58 text-white"
        title="Criteria & Circumstances"
      />
      <div className="grid grid-cols-3 gap-8 mt-40">
        {labels.map((label, index) => (
          <div key={index} className="mb-10 min-w-0">
            <Checkbox
              label={label}
              checked={isChecked[index]}
              onChange={(value) => handleCheckboxChange(index, value)}
              className="text-white"
            />
          </div>
        ))}
      </div>

      <div className="mt-0">
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
