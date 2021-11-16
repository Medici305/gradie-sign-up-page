import React from "react";
import Form from "./Form";

const SignUpForm = () => {
  return (
    //   1. Container
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 box-sizing overflow-y-auto">
      {/* 2. Row */}
      <div className="flex h-full overflow-y-auto sm:h-3/4 flex-col lg:flex-row m-lg-12 w-full sm:w-10/12 shadow-lg bg-white sm:rounded-lg">
        {/* 3. Columns */}
        {/* 3.1 Background image  */}
        <div className="flex flex-1 flex-shrink-0 justify-center items-center bg-sign-up-5 bg-center bg-cover bg-opacity-50 bg-no-repeat rounded-b-lg sm:rounded-lg">
          <div className="flex justify-center items-center text-center rounded-lg h-2/3 w-10/12 backdrop-filter backdrop-blur-md">
            <h1 className="">"Motivational Text"</h1>
          </div>
        </div>
        {/* 3.2 Form */}
        <div className="flex flex-1 border-light-blue justify-center bg-white sm:rounded-lg">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
