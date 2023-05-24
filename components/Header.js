const Header = ({ title, titleClassName }) => {
  return (
    <header className="py-5 text-center">
      <h1 className={`${titleClassName} font-bold`}>{title}</h1>
    </header>
  );
};

export default Header;
