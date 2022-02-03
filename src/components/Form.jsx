import React from 'react';

function Form() {
  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10">
      <h2 className="font-black text-3xl text-center">Patient´s Follow Up</h2>

      <p className="text-xl mt-4 text-center">
        Add patient and
        <span className="text-indigo-600 font-bold"> Manage them</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mt-5">
        <div className="mb-5">
          <label
            htmlFor="petname"
            className="block text-gray-700 p-2 font-bold uppercase"
          >
            Pet´s Name
          </label>
          <input
            id="petname"
            type="text"
            className="block border-2 p-2 rounded-md placeholder-gray-400 w-full"
            placeholder="Pet´s Name"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 p-2 font-bold uppercase"
          >
            Pet´s Owner Name
          </label>
          <input
            id="owner"
            type="text"
            className="block border-2 p-2 rounded-md placeholder-gray-400 w-full"
            placeholder="Pet´s Owner Name"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 p-2 font-bold uppercase"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="block border-2 p-2 rounded-md placeholder-gray-400 w-full"
            placeholder="Email"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="entry"
            className="block text-gray-700 p-2 font-bold uppercase"
          >
            Entry Date
          </label>
          <input
            id="entry"
            type="date"
            className="block border-2 p-2 rounded-md placeholder-gray-400 w-full"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 p-2 font-bold uppercase"
          >
            Pets Symptoms
          </label>
          <textarea
            id="symptoms"
            className="block border-2 p-2 rounded-md placeholder-gray-400 w-full"
            placeholder="Describe the symptoms"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 font-bold text-white hover:bg-indigo-700 p-3 w-full uppercase transition-colors"
          value="Add Patient"
        />
      </form>
    </div>
  );
}

export default Form;
