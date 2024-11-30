import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Password Validation
    if (!passwordRegex.test(formData.password)) {
      setPasswordError(
        "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character."
      );
      return;
    } else {
      setPasswordError("");
    }

    // Confirm Password Validation
    if (formData.password !== formData.confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    } else {
      setConfirmPasswordError("");
    }

    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
              {passwordError && (
                <p className="text-sm text-red-500 mt-1">{passwordError}</p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
              {confirmPasswordError && (
                <p className="text-sm text-red-500 mt-1">
                  {confirmPasswordError}
                </p>
              )}
            </div>

            {/* Photo URL Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                placeholder="Photo URL (optional)"
                className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
            >
              Register
            </button>
          </form>

          {/* Additional Options */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
