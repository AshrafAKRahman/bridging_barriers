const NormalButton = ({ text }) => {
  return (
    <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded">
      {text}
    </button>
  );
};

export default NormalButton;
