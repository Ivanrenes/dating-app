import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

function Form({ patients, patient, setPatients, setPatient }) {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPetName(patient.petName);
      setOwnerName(patient.ownerName);
      setEmail(patient.email);
      setEntryDate(patient.entryDate);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if ([petName, ownerName, email, entryDate, symptoms].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    // generate patient id
    const generateId = () =>
      Math.random().toString(36).substring(2) + Date.now().toString(36);

    // Create new patient object
    const newPatient = {
      petName,
      ownerName,
      email,
      entryDate,
      symptoms
    };

    if (patient.id) {
      // Edit Patient
      // Add correspondent ID to patient which we are updating
      newPatient.id = patient.id;
      const patientsUpdated = patients.map((patientState) =>
        patient.id === patientState.id ? newPatient : patientState
      );
      setPatients(patientsUpdated);
      setPatient({});
    } else {
      // Add Patient
      newPatient.id = generateId();
      setPatients([...patients, newPatient]);
    }

    // Reset form
    setPetName('');
    setOwnerName('');
    setEmail('');
    setEntryDate('');
    setSymptoms('');
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10">
      <h2 className="font-black text-3xl text-center">Patient´s Follow Up</h2>

      <p className="text-xl mt-4 text-center">
        Add patient and
        <span className="text-indigo-600 font-bold"> Manage them</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md mx-5 rounded-lg py-10 px-5 mt-5"
      >
        {error && <Error msg="All fields are required" />}
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
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
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
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
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
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 font-bold text-white hover:bg-indigo-700 p-3 w-full uppercase rounded-md transition-colors"
          value={patient.id ? 'Edit Patient' : 'Add Patient'}
        />
      </form>
    </div>
  );
}

Form.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPatients: PropTypes.func.isRequired,
  patient: PropTypes.shape({
    id: PropTypes.string,
    petName: PropTypes.string,
    ownerName: PropTypes.string,
    email: PropTypes.string,
    entryDate: PropTypes.string,
    symptoms: PropTypes.string
  }).isRequired,
  setPatient: PropTypes.func.isRequired
};

export default Form;
