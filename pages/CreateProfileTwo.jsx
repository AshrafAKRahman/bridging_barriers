// import { useState } from "react";
// import NormalButton from "@/components/buttons/NormalButton";
// import Link from "next/link";
// import Header from "@/components/header/Header";

// export default function CreateProfileForm() {
//   const [firstName, setFirstName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [isCheckedOne, setIsCheckedOne] = useState(false);
//   const [isCheckedTwo, setIsCheckedTwo] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Your details have been submitted");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-blue-200 rounded-lg p-8 mt-10 sm:mx-5 md:mx-20 lg:ml-20 lg:mr-20"
//         style={{
//           flex: 1,
//           borderRadius: "20px",
//           paddingTop: "5px",
//           paddingBottom: "5px",
//         }}
//       >
//         <div className="mb-10">
//           <Header
//             titleClassName="text-3xl absolute left:40 md:left-20 top-40 transform translate-x-6 translate-y-58 text-black"
//             title="Enter your details"
//           />
//         </div>
//         <div className="flex flex-col space-y-4">
//           <input
//             className="border rounded p-2"
//             type="text"
//             placeholder="Enter your first name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//           <input
//             className="border rounded p-2"
//             type="text"
//             placeholder="Enter your surname"
//             value={surname}
//             onChange={(e) => setSurname(e.target.value)}
//           />
//           <input
//             className="border rounded p-2"
//             type="text"
//             placeholder="Enter your mobile number"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//           />
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={isCheckedOne}
//               onChange={(e) => setIsCheckedOne(e.target.checked)}
//             />
//             <span>Send me emails and I wish to subscribe to newsletters</span>
//           </label>
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={isCheckedTwo}
//               onChange={(e) => setIsCheckedTwo(e.target.checked)}
//             />
//             <span>
//               Privacy, terms and conditions data agreement Lorem ipsum...
//             </span>
//           </label>
//           <div className="flex justify-between mt-10">
//             <Link href="/previousPagePath">
//               <NormalButton text="Previous" />
//             </Link>
//             <Link href="/nextPagePath">
//               <NormalButton text="Next" />
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
import Form from "@/components/form/form";

const CreateProfileTwo = () => {
  return <Form />;
};
export default CreateProfileTwo;
