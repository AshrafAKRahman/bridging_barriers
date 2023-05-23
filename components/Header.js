const Header = ({ title, titleClassName }) => {
    return (
      <header className="bg-white text-black py-5 text-center">
        <h1 className={`text-2xl ${titleClassName}`}>{title}</h1>
      </header>
    );
  };
  
  export default Header;