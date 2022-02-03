import React from 'react';
import Patient from './Patient';

function PatientsList() {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      <h2 className="font-black text-3xl text-center">Patients List</h2>
      <p className="text-xl text-center mt-4 mb-5">
        Management of the{' '}
        <span className="text-indigo-600 font-bold">Patients and Dates. </span>
      </p>
      <div className="h-screen overflow-y-auto">
        <Patient />
        <Patient />
        <Patient />
        <Patient />
      </div>
    </div>
  );
}

export default PatientsList;
