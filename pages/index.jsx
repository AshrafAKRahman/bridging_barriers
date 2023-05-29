import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Landing from "@/pages/LandingPage";

export default function Home() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <Navbar />
      <Footer />
      <Landing />
    </div>
  );
}
