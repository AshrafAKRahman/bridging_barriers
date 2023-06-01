const NormalButton = ({ text }) => {
  return (
    <button
      style={{ width: "121px", height: "47px", borderRadius: "20px" }}
      className="bg-blue-700 hover:bg-blue-800 text-white text-center font-bold py-3 transform hover:scale-110 transition-transform rounded shadow-xl"
    >
      {text}
    </button>
  );
};

export default NormalButton;
