import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Landing from "@/pages/LandingPage";

const Home = () => {
  return (
    <div className="w-full bg-blue-600 min-h-screen">
      <Navbar />
      <Footer />
      <Landing />
    </div>
  );
};

export default Home;
