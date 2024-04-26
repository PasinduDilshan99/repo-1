'use client'
import React, { useState } from 'react';
import InputField from '../../Components/InputField';
import Button from '../../Components/Button';

const CreatePartnerPage: React.FC = () => {
  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  // Add states for other input fields here

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <div>
      <h1>Create Partner</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Partner Name"
          value={partnerName}
          onChange={(e) => setPartnerName(e.target.value)}
          error={""}
        />
        <InputField
          label="Partner Email"
          value={partnerEmail}
          onChange={(e) => setPartnerEmail(e.target.value)}
          error={""}
        />
        {/* Add input fields for other partner details */}

        <div>
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={() => {}}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePartnerPage;
