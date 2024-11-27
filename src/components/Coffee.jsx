import React from "react";
import { FaEye, FaPenFancy, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const Coffee = ({ cof, setALL, all }) => {
  //   console.log(cof);
  const {
    _id,
    photo,
    name,
    details,
    category,
    Quantity,
    taste,
    supplier,
    price,
  } = cof;

  const handleDelete = (id) => {
    // conformation massage
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your coffee has been deleted.",
            icon: "success",
          });
          fetch(`http://localhost:5000/coffee/${id}`, {
            method: "DELETE",
          });
          const remain = all.filter(co => co._id != _id);
          setALL(remain);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
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
          <Link
            to={`/coffe/update-coffe/${_id}`}
            className="btn btn-sm btn-outline btn-secondary"
          >
            <FaPenFancy />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-outline btn-error"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
};

export default Coffee;
