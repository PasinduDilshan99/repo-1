'use client'
import React, { useState } from 'react';
import InputField from '../../Components/InputField';
import Button from '../../Components/Button';

const CreatePartnerPage: React.FC = () => {
  const [partnerId, setPartnerId] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerMobileNumber, setPartnerMobileNumber] = useState('');
  const [partnerCountry, setPartnerCountry] = useState('');
  // Add states for other input fields here

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <div className='my-5 place-content-center'>
      <div className='my-2 ml-24'>
      <h1>Create Partner</h1> 
      </div>
      <div className='mb-3'>
      <h1>Partner Information</h1>
      </div>
      <form onSubmit={handleSubmit}>
       <InputField
          label="Partner ID"
          value={partnerId}
          onChange={(e) => setPartnerId(e.target.value)}
          error={""}
        />
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
        <div className='5'>Contact Information</div>
        <InputField
          label="Mobile number"
          value={partnerMobileNumber}
          onChange={(e) => setPartnerMobileNumber(e.target.value)}
          error={""}
        />
        <InputField
          label="Country"
          value={partnerCountry}
          onChange={(e) => setPartnerCountry(e.target.value)}
          error={""}
        />
        <div>
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={() => {}}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePartnerPage;
