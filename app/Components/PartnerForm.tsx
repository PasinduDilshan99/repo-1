'use client'
import React, { useState } from 'react';
import InputField from '../Components/InputField';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Button, ButtonGroup } from "@nextui-org/button";

const PartnerForm: React.FC = () => {
  const [partnerId, setPartnerId] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerMobileNumber, setPartnerMobileNumber] = useState('');
  const [partnerCountry, setPartnerCountry] = useState('');
  const [partnerNameError, setPartnerNameError] = useState('');
  const [partnerEmailError, setPartnerEmailError] = useState('');
  const [partnerMobileNumberError, setPartnerMobileNumberError] = useState('');
  const [partnerCountryError, setPartnerCountryError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerName.trim()) {
      setPartnerNameError('Please enter a value for Partner Name');
    } else {
      // Implement form submission logic here
      setPartnerNameError('');
      // Proceed with form submission
    }
    if (!partnerEmail.trim()) {
      setPartnerEmailError('Please enter a value for Partner Email');
    } else if (!isValidEmail(partnerEmail.trim())) {
      setPartnerEmailError('Please enter a valid email address');
    } else {
      setPartnerEmailError('');
    }
    if (!partnerMobileNumberError.trim()) {
      setPartnerMobileNumberError('Please enter a valid Contact Number');
    } else {
      setPartnerMobileNumberError('');
    }
    if (!partnerCountry.trim()) {
      setPartnerCountryError('Please enter country ');
    } else {
      setPartnerCountryError('');
    }

  };

  const isValidEmail = (email: string) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <div className="w-full  px-1 grid grid-cols-1 gap-4 ">
      <div>
        <div className='flex w-5/6 justify-center items-center'>
          <PermIdentityIcon className="mr-2 w-12 h-12 align-middle" />
          <h1 className="text-2xl font-bold">Create Partner</h1>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <hr className="border-gray-300 w-full mt-6 mb-6" /> 
          <div className="mb-3 text-xl underline-color-black underline-offset-1">Partner Information</div>
          <InputField
            label="Partner ID"
            value={partnerId}
            onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPartnerId(e.target.value)}
            error={''}
          />
          <InputField
            label="Partner Name"
            value={partnerName}
            onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPartnerName(e.target.value)}
            error={partnerNameError} // Pass the error state to indicate errors
          />
       
          <InputField
            label="Partner Email"
            value={partnerEmail}
            onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPartnerEmail(e.target.value)}
            error={partnerEmailError}
          />
          <hr className="border-gray-300 w-full mt-6 mb-6" /> {/* Horizontal line */}
          <div className="mb-3 text-xl underline-color-black underline-offset-1">Contact Information</div>
          <InputField
            label="Mobile number"
            value={partnerMobileNumber}
            onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPartnerMobileNumber(e.target.value)}
            error={partnerMobileNumberError}
          />
          <InputField
            label="Country"
            value={partnerCountry}
            onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPartnerCountry(e.target.value)}
            error={partnerCountryError}
          />
          <div className="flex justify-end w-9/12 py-10 ">
            <div className='place-content-end '>
              <button onClick={handleSubmit}  className="bg-slate-400 hover:bg-transparent text-black-800 font-semibold hover:text-bslack py-2 px-4 border border-stone-400 hover:border-slate-700 rounded">Submit</button>
            </div>
            <div className='pl-5'>
              <button className="bg-stone-400 hover:bg-transparent text-black-800 font-semibold hover:text-black py-2 px-4 border border-slate-400 hover:border-slate-700 rounded">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerForm;
