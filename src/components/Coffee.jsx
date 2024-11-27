import React from "react";
import { FaEye, FaPenFancy, FaTrash } from "react-icons/fa";

const Coffee = ({ cof }) => {
  console.log(cof);
  const {
    photo,
    name,
    details,
    category,
    Quantity,
    taste,
    supplier,
    price,
  } = cof;
  return (
    <>
      <div className="flex items-center bg-neutral-100 shadow-md rounded-lg p-4">
        {/* Coffee Image */}
        <img
          src={photo}
          alt="Coffee Cup"
          className="w-28 h-36 rounded-lg object-cover"
        />

        {/* Coffee Details */}
        <div className="flex-grow ml-4">
          <h2 className="text-lg font-bold text-gray-800">Name: {name}</h2>
          {/* <p className="text-sm text-gray-600">Supplier: {supplier}</p> */}
          <p className="text-sm text-gray-600">Quantity: {Quantity}</p>
          {/* <p className="text-sm text-gray-600">Category: {category}</p> */}
          <p className="text-sm text-gray-600">Taste: {taste}</p>
          {/* <p className="text-sm text-gray-600">Supplier: {supplier}</p> */}
          <p className="text-sm text-gray-600">Price: {price} Taka</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="btn btn-sm btn-outline btn-warning">
            <FaEye />
          </button>
          <button className="btn btn-sm btn-outline btn-secondary">
            <FaPenFancy />
          </button>
          <button className="btn btn-sm btn-outline btn-error">
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
};

export default Coffee;
