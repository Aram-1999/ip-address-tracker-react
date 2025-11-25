import { useEffect, useRef, useState } from "react";
import { isDomain, isIP } from "../ulilities/utilityFunctions";

interface SearchInputProps {
  searchFor: (value: string) => void;
}

function SearchInput({ searchFor }: SearchInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue === "") {
      setError("The input can not be empty!");
      inputRef.current?.focus();
      return;
    } else if (!isIP(inputValue) && !isDomain(inputValue)) {
      setError("Please enter a valid IP address or domain name!");
      inputRef.current?.focus();
      return;
    } else {
      setError("");
    }

    searchFor(inputValue);
    setInputValue("");
  };

  return (
    <div className='text-center'>
      <form
        className="border max-w-fit mx-auto mt-8 rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          className="max-w-fit px-24 outline-none py-1 text-gray-50"
          ref={inputRef}
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          type="text"
          id="text-input"
          placeholder="Search for any IP address or domain"
        />
        <button
          className="bg-black text-gray-200 px-2 h-full rounded-r-lg py-1"
          type="submit"
        >
          {">"}
        </button>
      </form>
      {error !== "" && <p className='text-red-300'>{error}</p>}
    </div>
  );
}

export default SearchInput;