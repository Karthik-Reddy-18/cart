import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useSearchParams } from 'react-router-dom'

 const InputField = ({type ,placeholder ,name ,handlechange ,address})=>(
    <input className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition'

    type={type}
    placeholder={placeholder}
    onChange={handlechange}
    name={name}
    value={address[name]}
    required

    />
 )

const AddAddress = () => {
    const [address, setAddress]=useState({
        firstname: '',
        lastname: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
    })

    const handlechange=(e)=>{
        const {name,value} =e.target;
        setAddress((prevAddress)=>({
            ...prevAddress,
            [name]:value,

        }))

    }



    const onSubmitHandler =(e)=>{
        e.preventDefault();
    }

  return (
    <div className='mt-16 pd-16'>
      <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span className='font-semibold text-primary'>Address</span></p>
      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
        <div className='flex-1 max-w-md'>
            <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>

                <div className='grid grid-cols-2 gap-4'> 
                    <InputField handlechange={handlechange} address={address} name='firstname' type="text" placeholder="First Name"/>
                <InputField handlechange={handlechange} address={address} name='Lastname' type="text" placeholder="Last Name"/>
                </div>
                <InputField handlechange={handlechange} address={address} name='email' type="email" placeholder="Email Address"/>
                <InputField handlechange={handlechange} address={address} name='street' type="text" placeholder="Street"/>

                <div className='grid grid-cols-2 gap-4'>
                <InputField handlechange={handlechange} address={address} name='city' type="text" placeholder="City"/>
                <InputField handlechange={handlechange} address={address} name='state' type="text" placeholder="State"/>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                <InputField handlechange={handlechange} address={address} name='zipcode' type="number" placeholder="Zip Code"/>
                <InputField handlechange={handlechange} address={address} name='country' type="text" placeholder="Country"/>
                </div>
                <InputField handlechange={handlechange} address={address} name='phone' type="text" placeholder="Phone"/>
                <button className='w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase'>
                    Save address
                 </button>

                
            </form>
        </div>
        <img className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_iamge} alt="Add address" />
      </div>
    </div>
  )
}

export default AddAddress

