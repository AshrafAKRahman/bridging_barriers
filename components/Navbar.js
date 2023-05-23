import Link from "next/link";
import LargeButton from "./largeButton";





const Navbar = ()=> {
    return (
        <nav className="flex items-center justify-between p-6 bg-white">
            <div className="text-white text-2xl">
            <img src="../logo.png" alt="Logo"  className="w-18 h-8 mr-2" />
            </div>
            <LargeButton/>
        </nav>
    )
}

export default Navbar;
