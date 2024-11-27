import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Coffee from "../components/Coffee";

const Coffeeall = () => {
  const Loadall = useLoaderData();

  const [all, setALL] = useState(Loadall);
  
  //   console.log(all);
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {all.map((cof, i) => (
        <Coffee key={i} setALL={setALL} all={all} cof={cof}></Coffee>
      ))}
    </div>
  );
};

export default Coffeeall;
