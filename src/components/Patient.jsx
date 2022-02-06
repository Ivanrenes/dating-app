import React from 'react';
import PropTypes from 'prop-types';

function Patient({ patient }) {
  const { id, petName, ownerName, email, entryDate, symptoms } = patient;

  const handleEditPatient = (e) => {
    e.preventDefault();
    console.log('Editing patiend: ', id);
  };

  const handleDeletePatient = (e) => {
    e.preventDefault();
    console.log('Deleting patiend: ', id);
  };
  return (
    <div className=" mb-2 mx-5 px-5 py-10 shadow-md rounded-md bg-white">
      <p className="font-bold uppercase mb-3">
        Name: <span className="font-normal normal-case">{petName}</span>
      </p>
      <p className="font-bold uppercase mb-3">
        Pet´s Owner Name:{' '}
        <span className="font-normal normal-case">{ownerName}</span>
      </p>
      <p className="font-bold uppercase mb-3">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold uppercase mb-3">
        Entry Date: <span className="font-normal normal-case">{entryDate}</span>
      </p>
      <p className="font-bold uppercase mb-3">
        Pet´s Symptoms:{' '}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex">
        <input
          type="button"
          onClick={handleEditPatient}
          className="block uppercase bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-5 "
          value="Edit"
        />
        <input
          type="button"
          onClick={handleDeletePatient}
          className="block ml-4 uppercase bg-red-500 hover:bg-red-600 text-white font-bold px-10 py-5 "
          value="DELETE"
        />
      </div>
    </div>
  );
}

Patient.propTypes = {
  patient: PropTypes.shape({
    id: PropTypes.string.isRequired,
    petName: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    entryDate: PropTypes.string.isRequired,
    symptoms: PropTypes.string.isRequired
  }).isRequired
};

export default Patient;
