import { useState } from "react";

const Checkbox = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="text-gray-900 text-sm">{label}</span>
    </label>
  );
};

export default Checkbox;
