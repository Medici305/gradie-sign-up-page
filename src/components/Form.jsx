import React from "react";

const Form = () => {
  return (
    <form
      action="/login"
      className="flex flex-col justify-center w-3/4 overflow-y-auto py-8 lg:py-2"
    >
      <h1 className="text-4xl mb-5 lg:mb-10 ml-3 lg:ml-6 font-bold">Sign Up</h1>
      <div className="flex flex-wrap lg:mx-3 mb-2">
        {/* 1. First Name */}
        <div className="w-full lg:w-1/2 px-3 mb-4">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
            id="grid-first-name"
            type="text"
            placeholder="Enter First Name"
            required
          />
        </div>
        {/* 2. Last Name  */}
        <div className="w-full lg:w-1/2 px-3">
          <label
            className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
            id="grid-last-name"
            type="text"
            placeholder="Enter Last Name"
            required
          />
        </div>
      </div>
      {/* 3. Email Address */}
      <div className="w-full px-3 lg:px-6 mb-5">
        <label
          className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Email Address
        </label>
        <input
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
          id="grid-last-name"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      {/* 4. Password  */}
      <div className="w-full px-3 lg:px-6 mb-5">
        <label
          className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Set Password
        </label>
        <input
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
          id="grid-last-name"
          type="password"
          placeholder="Enter password"
          required
        />
      </div>
      {/* 5.  */}
      <button
        className="text-pink-500 mx-3 lg:mx-6 mt-2 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
