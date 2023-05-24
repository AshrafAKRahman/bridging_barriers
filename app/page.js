import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Landing from "@/pages/LandingPage";

export default function Home() {
  return (
    <div className="bg-blue-100 min-h-screen rounded">
      <Navbar />
      <Footer />
      <Landing />
    </div>
  );
}
