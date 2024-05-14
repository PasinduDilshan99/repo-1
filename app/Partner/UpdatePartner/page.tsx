import React from 'react';
import PartnerForm from '../../Components/UpdatePartnerForm';
import Link from 'next/link';
import { Breadcrumbs, Typography } from '@mui/material';
import {Button, ButtonGroup} from "@nextui-org/button";

const UpdatePartnerProfilePage = () => {
  const handleSubmit = (partnerData: any) => {
    // Submit partner data to backend
    console.log('Partner data:', partnerData);
    // You can use Axios or Fetch API to make a POST request to your backend endpoint
  };

  return (
   <main className="flex-1 flex flex-col bg-gray-100 transition duration-500 ease-in-out overflow-y-auto p-1">  
    <div className='p-3 justify-betweens'>
    <Breadcrumbs aria-label="breadcrumb" >
        <Link color="inherit" href="/">
          Dashboard
        </Link>
        <Link color="inherit" href="/">
          Partners
        </Link>
        <Typography color="text.primary">Update Partner Profiles</Typography>
      </Breadcrumbs>
      </div>
      <h1 className="text-2xl font-bold mb-4 pl-3">Update Partner Profile</h1>
      <div className='flex '>
      <div className=" flex justify-center w-full">
        < PartnerForm/>
        </div> 
      </div>
    </main>
  );
};

export default UpdatePartnerProfilePage;
