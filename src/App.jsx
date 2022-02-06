import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import PatientsList from './components/PatientsList';

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    if (localStorage.getItem('patients').length > 0) {
      setPatients(JSON.parse(localStorage.getItem('patients')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          patient={patient}
          setPatients={setPatients}
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          setPatients={setPatients}
        />
      </div>
    </div>
  );
}

export default App;
