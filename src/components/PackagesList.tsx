import React, { useState } from "react";
import useBindActions from "../hooks/useBindActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const PackagesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchPackages } = useBindActions();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    searchPackages(term);
  };

  const { loading, error, data } = useTypedSelector((state) => state.packages);
  return (
    <div>
      <h1>Search for npm packages</h1>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <ul>
          {data.map((name: string) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PackagesList;
