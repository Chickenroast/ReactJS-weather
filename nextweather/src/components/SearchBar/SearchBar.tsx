"use client";
// import Image from "next/image"; cannot use next/image ??
import { useState } from "react";
import { HiSearch } from "react-icons/hi";

import { Field } from "../Fields/Field";
import { Flex } from "../Flex/Flex";

interface SearchBarProps {
  onSearch: (searchInput: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  async function handleSubmit() {
    onSearch(searchInput);
  }

  return (
    <Flex flexDirection="row">
      <Field
        onChange={handleChange}
        value={searchInput}
        placeholder="Search for a city"
        Icon={<HiSearch />}
      />
      <button
        className="transform transition duration-300 ease-in-out text-white text-xs bg-yellow-500 rounded-r-md p-2 -ml-10 px-4 hover:translate-x-1 bg-yellow-600"
        type="submit"
        onClick={handleSubmit}
      >
        Search
      </button>
    </Flex>
  );
}
