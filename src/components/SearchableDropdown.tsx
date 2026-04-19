import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "Nepal", label: "Nepal" },
  { value: "India", label: "India" },
  { value: "China", label: "China" },
  { value: "Australia", label: "Australia" },
  { value: "Germany", label: "Germany" },
  { value: "America", label: "America" },
  { value: "Denmark", label: "Denmark" },
];

export function SearchableDropdown() {

  interface OptionType  {
value: string;
label: string;
  }
 
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
   const handleChange =(selectedOption: OptionType | null) =>{
    setSelectedOption(selectedOption)
  }

  return (
    <div className="m-6">
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        isSearchable
      />
    </div>
  );
}