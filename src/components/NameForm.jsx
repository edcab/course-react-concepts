import React, { useState } from 'react';


const NameForm = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder='Enter your name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>
        {submittedName ? `You submitted: ${submittedName}` : null}
      </p>
        
    </div>
  );
}

export default NameForm;