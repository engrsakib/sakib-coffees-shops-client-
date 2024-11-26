import React from "react";

const AddCofee = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    chef: "",
    supplier: "",
    taste: "",
    category: "",
    details: "",
    photo: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending Data:", formData); // Debugging purposes

    try {
      const response = await fetch(
        "https://your-backend-url.com/api/update-coffee",
        {
          method: "POST", // or PUT depending on your API
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Server Response:", result);
        alert("Coffee details updated successfully!");
      } else {
        console.error("Failed to update coffee details:", response.status);
        alert("Error updating coffee details. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network error. Please check your connection.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="card w-full max-w-4xl shadow-lg bg-white p-8 rounded-lg">
          {/* Back to home */}
          <button className="btn btn-sm btn-outline mb-4">
            <span className="mr-2">←</span> Back to home
          </button>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Update Existing Coffee Details
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 mb-4">
              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="American Coffee"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              {/* Chef */}
              <div>
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Mr. Matin Paul"
                  value={formData.chef}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Supplier */}
              <div>
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Cappu Authorizer"
                  value={formData.supplier}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              {/* Taste */}
              <div>
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Sweet and hot"
                  value={formData.taste}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Category */}
              <div>
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Americano"
                  value={formData.category}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              {/* Details */}
              <div>
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Espresso with hot water"
                  value={formData.details}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="https://via.placeholder.com"
                value={formData.photo}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button className="btn btn-primary w-full mt-4">
                Update Coffee Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCofee;
