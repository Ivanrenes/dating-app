import React from 'react';

function Patient() {
  return (
    <div className="m-3 px-5 py-10 shadow-md rounded-md bg-white">
      <p className="font-bold uppercase mb-3">
        Name: <span className="font-normal normal-case">Michael</span>
      </p>
      <p className="font-bold uppercase mb-3">
        Pet´s Owner Name:{' '}
        <span className="font-normal normal-case">Alfredo</span>
      </p>
      <p className="font-bold uppercase mb-3">
        Email:{' '}
        <span className="font-normal normal-case">dummybobbie@email.text</span>
      </p>
      <p className="font-bold uppercase mb-3">
        Entry Date: <span className="font-normal normal-case">03/02/2022</span>
      </p>
      <p className="font-bold uppercase mb-3">
        Pet´s Symptoms:{' '}
        <span className="font-normal normal-case">
          Suffers from attack, fever, headache, lack of love
        </span>
      </p>
    </div>
  );
}

export default Patient;
