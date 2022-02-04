import React from 'react';
import PropTypes from 'prop-types';

function Error({ msg }) {
  return (
    <div>
      <p className="rounded-md bg-red-500 p-3 font-bold text-center mb-2 text-white uppercase">
        {msg}
      </p>
    </div>
  );
}

Error.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Error;
