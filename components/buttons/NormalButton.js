const NormalButton = ({ text }) => {
  return (
    <button
      style={{ width: "121px", height: "47px", borderRadius: "20px" }}
      className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 transform hover:scale-110 transition-transform rounded"
    >
      {text}
    </button>
  );
};

export default NormalButton;
