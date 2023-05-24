import Link from "next/link";
import NormalButton from "@/components/buttons/NormalButton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-200">
      <div className="text-white text-2xl">
        <img src="../logo.png" alt="Logo" className="w-22 h-12 mr-2" />
      </div>
      <NormalButton text="Login" />
    </nav>
  );
};

export default Navbar;
