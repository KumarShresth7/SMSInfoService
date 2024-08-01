import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    pinCode: '',
    categories: {
      horoscope: false,
      weather: false,
      news: false,
    },
    horoscopeName: '',
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
        horoscopeName: name === 'horoscope' && !checked ? '' : prevData.horoscopeName,
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
    // form submission logic goes here
    console.log(formData);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-indigo-200 py-16 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-indigo-500 to-indigo-800 z-0"></div>
      <div className="relative z-1 max-w-4xl w-full space-y-8 p-12 bg-white rounded-xl shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-indigo-700">Register</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">

            {/* Name Column */}
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

            {/* Phone Number  */}
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
              <div className="flex items-center space-x-4 mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="horoscope"
                    checked={formData.categories.horoscope}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">Horoscope</span>
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
                    name="news"
                    checked={formData.categories.news}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">News</span>
                </label>
              </div>
              {formData.categories.horoscope && (
                <div className="mt-2">
                  <label htmlFor="horoscopeName" className="block text-gray-700">Zodiac Signs</label>
                  <input
                    type="text"
                    name="horoscopeName"
                    id="horoscopeName"
                    value={formData.horoscopeName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              )}
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
                    value="hindi"
                    checked={formData.language === 'hindi'}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-indigo-600 ml-2"
                  />
                  <span className="ml-2 text-gray-700">Hindi</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="language"
                    value="punjabi"
                    checked={formData.language === 'punjabi'}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-indigo-600 ml-2"
                  />
                  <span className="ml-2 text-gray-700">Punjabi</span>
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

export default Register;
