import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    pinCode: '',
    categories: {
      healthcare: false,
      weather: false,
      publicServices: false,
    },
    language: 'english',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        categories: {
          ...prevData.categories,
          [name]: checked,
        },
      }));
    } else if (type === 'radio') {
      setFormData((prevData) => ({
        ...prevData,
        language: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-4xl w-full space-y-8 p-12 bg-white rounded-xl shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Register</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            
            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            
            {/* Permanent Address */}
            <div>
              <label htmlFor="address" className="block text-gray-700">Permanent Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            
            {/* Pin Code */}
            <div>
              <label htmlFor="pinCode" className="block text-gray-700">Pin Code</label>
              <input
                type="text"
                name="pinCode"
                id="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            
            {/* Categories */}
            <fieldset>
              <legend className="block text-gray-700">Categories</legend>
              <div className="space-y-2 mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="healthcare"
                    checked={formData.categories.healthcare}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">Healthcare</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="weather"
                    checked={formData.categories.weather}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">Weather</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="publicServices"
                    checked={formData.categories.publicServices}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">Public Services</span>
                </label>
              </div>
            </fieldset>
            
            {/* Language */}
            <fieldset>
              <legend className="block text-gray-700">Language</legend>
              <div className="space-y-2 mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="language"
                    value="english"
                    checked={formData.language === 'english'}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">English</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="language"
                    value="spanish"
                    checked={formData.language === 'spanish'}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">Spanish</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="language"
                    value="french"
                    checked={formData.language === 'french'}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">French</span>
                </label>
              </div>
            </fieldset>
            
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-indigo-600 hover:text-indigo-500">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;