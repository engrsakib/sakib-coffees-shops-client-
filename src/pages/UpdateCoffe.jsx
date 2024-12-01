import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
  const data = useLoaderData();
  //   //(data);

  const {
    _id,
    name,
    quantity,
    supplier,
    taste,
    category,
    price,
    details,
    photo,
  } = data;

  const defaultData = {
    name: name,
    quantity: quantity,
    supplier: supplier,
    taste: taste,
    category: category,
    price: price,
    details: details,
    photo: photo,
  };
  const [formData, setFormData] = useState(defaultData);

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //   //("Updated Coffee Data:", formData);
    // Send formData to the server using fetch/axios
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          title: "COFFEE UPDATED!",
          text: "Your coffee upadate successfuly!",
          icon: "success",
        });
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <>
      <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Update Coffee Details
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Quantity */}
          <div>
            <label className="label">Quantity</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Supplier */}
          <div>
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Taste */}
          <div>
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              value={formData.taste}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Category */}
          <div>
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Price */}
          <div>
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Details */}
          <div className="col-span-2">
            <label className="label">Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
            />
          </div>
          {/* Photo */}
          <div className="col-span-2">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Submit Button */}
          <div className="col-span-2 text-center">
            <button type="submit" className="btn btn-primary w-full">
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateCoffe;
