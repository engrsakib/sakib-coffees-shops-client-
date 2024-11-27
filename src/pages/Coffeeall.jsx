import React from "react";
import { useLoaderData } from "react-router-dom";
import Coffee from "../components/Coffee";

const Coffeeall = () => {
  const all = useLoaderData();
//   console.log(all);
  return (
    <div>
      {all.map((cof, i) => (
        <Coffee key={i} cof={cof}></Coffee>
      ))}
    </div>
  );
};

export default Coffeeall;
