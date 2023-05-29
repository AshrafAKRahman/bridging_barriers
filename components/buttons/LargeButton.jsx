import Link from "next/link";

const LargeButton = ({ text, className, href }) => {
  return (
    <Link href={href}>
      <button
        style={{
          width: "470px",
          height: "95px",
          borderRadius: "200px",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
        className={`bg-blue-700 hover:bg-blue-800 text-white font-bold text-4xl py-12 px-24 transform hover:scale-110 transition-transform rounded ${className}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default LargeButton;
