import React from "react";

const SignUpForm = () => {
  return (
    //   1. Container
    <div className="flex sm:h-screen justify-center items-center bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 box-sizing">
      {/* 2. Row */}
      <div className="flex h-screen sm:h-4/5 flex-col lg:flex-row m-lg-12 w-full sm:w-10/12 shadow-lg bg-white sm:rounded-lg">
        {/* 3. Columns */}
        <div className="flex flex-auto justify-center items-center bg-sign-up-5 bg-center bg-cover bg-opacity-50 bg-no-repeat rounded-b-lg sm:rounded-lg">
          <div className="flex justify-center items-center text-center rounded-lg h-2/3 w-10/12 backdrop-filter backdrop-blur-md">
            <h1 className="">
              "Motivational Text"
            </h1>
          </div>
        </div>
        <div className="flex-auto bg-white sm:rounded-lg"></div>
      </div>
    </div>
  );
};

export default SignUpForm;
