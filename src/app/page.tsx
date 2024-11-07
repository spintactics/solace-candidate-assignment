"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Advocate } from "../types/advocates"

import AdvocateTable from "./components/AdvocateTable";
import useAdvocate from "./hooks/useAdvocate";

export default function Home() {
  const { advocates, loading } = useAdvocate();
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredAdvocates(advocates);
  }, [advocates]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    setSearchTerm(searchTerm)

    const caseInsensitiveIncludes = (src: string, tar: string) => {
      return src.toLowerCase().includes(tar.toLowerCase())
    }

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        caseInsensitiveIncludes(advocate.firstName, searchTerm) ||
        caseInsensitiveIncludes(advocate.lastName, searchTerm) ||
        caseInsensitiveIncludes(advocate.city, searchTerm) ||
        caseInsensitiveIncludes(advocate.degree, searchTerm) ||
        advocate.specialties.some((specialty) => 
          caseInsensitiveIncludes(specialty, searchTerm as string)
        ) ||
        searchTerm === '' + advocate.yearsOfExperience ||
        caseInsensitiveIncludes('' + advocate.phoneNumber, searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onResetClick = () => {
    console.log(advocates);

    setSearchTerm("")
    setFilteredAdvocates(advocates);
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1 className="text-green text-3xl border-b-2 pb-2">Solace Advocates</h1>
      <br />
      <br />
      <div className="border-b">
        <h2 className="text-green text-xl pb-2">Search</h2>
        <span>
          Searching for: <span id="search-term">{searchTerm}</span>
        </span>
        <div className ="w-full max-w-sm mr-auto flex justify-between px-0">
          <input className="p-2 rounded-lg" style={{ border: "1px solid black" }} onChange={onChange} type="text" value={searchTerm} />
          <button className="btn-primary" onClick={onResetClick}>Reset Search</button>
        </div>
        <br />
        <br /> 
      </div>
      <AdvocateTable filteredAdvocates={filteredAdvocates} />
    </main>
  );
}
