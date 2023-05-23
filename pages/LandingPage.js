import Header from "../components/Header"

const Landing = () => {
    return (
      <div>
        <Header titleClassName="text-5xl absolute left-0 top-60 transform translate-x-6 translate-y-58 text-blue-700" title="Welcome to Bridging Barriers Portal" />
        <div className="mt-60 w-2/4">
          <hr className="border-blue-700 border-4" />
          <img className="w-1/2" src="../Mentor.jpg" alt="Mentor Image" />
        </div>
        </div>
    
    );
  }
  
  export default Landing;