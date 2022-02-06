import React from 'react';
import PropTypes from 'prop-types';
import alertConfirm from 'react-alert-confirm';

function Patient({ patient, setPatient, patients, setPatients }) {
  const { id, petName, ownerName, email, entryDate, symptoms } = patient;

  const handleDelete = async () => {
    const [isOk] = await alertConfirm({
      title: 'Are you sure?',
      content: `Do you really want to delete ${petName}?`,
      onOk: () => true,
      onCancel: () => false,
      cancelText: 'Cancel',
      okText: 'Yes'
    });

    if (isOk) {
      const patientsDeleted = patients.filter(
        (patientState) => patientState.id !== patient.id
      );
      setPatients(patientsDeleted);
    }
  };

  return (
    <div className=" mb-2 mx-5 px-5 py-10 shadow-md rounded-md bg-white">
      <input type="hidden" value={id} />
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
      <div className="flex justify-between mt-10">
        <input
          type="button"
          onClick={() => setPatient(patient)}
          className="block uppercase bg-orange-500 hover:bg-orange-600 text-white rounded-md font-bold px-10 py-5 "
          value="Edit"
        />
        <input
          type="button"
          className="block ml-4 uppercase bg-red-500 hover:bg-red-600 text-white rounded-md font-bold px-10 py-5 "
          value="DELETE"
          onClick={handleDelete}
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
  }).isRequired,
  setPatient: PropTypes.func.isRequired,
  patients: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPatients: PropTypes.func.isRequired
};

export default Patient;
