import NormalButton from "@/components/buttons/NormalButton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full p-6 bg-white">
      <div className="text-white text-2xl">
        <img src="../logo.png" alt="Logo" className="w-22 h-12 mr-2" />
      </div>
      <div className="mr-0">
        <NormalButton text="Login" />
      </div>
    </nav>
  );
};

export default Navbar;
