import React from 'react';
import PropTypes from 'prop-types';
import Patient from './Patient';

function PatientsList({ patients, setPatient, setPatients }) {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patients List</h2>
          <p className="text-xl text-center mt-4 mb-5">
            Management of the{' '}
            <span className="text-indigo-600 font-bold">
              Patients and Dates.{' '}
            </span>
          </p>
          <div className="md:h-screen overflow-y-auto">
            {patients.map((patient) => (
              <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                patients={patients}
                setPatients={setPatients}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            There are not patients
          </h2>
          <p className="text-xl text-center mt-4 mb-5">
            Start creating new one{' '}
            <span className="text-indigo-600 font-bold">
              and it will appear here.{' '}
            </span>
          </p>
        </>
      )}
    </div>
  );
}

PatientsList.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPatient: PropTypes.func.isRequired,
  setPatients: PropTypes.func.isRequired
};

export default PatientsList;
