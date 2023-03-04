import React from 'react'
import { logo } from '../../assets'

const Form = () => {
  return (
    <div className='flex flex-col p-20'>
        <div className='w-[550px]'>
            <img className='h-[52px]' src={logo} alt="" />
            <div className='flex flex-col mt-24'>
                <h1 className='text-4xl font-bold primary-text'>Selamat Datang!</h1>
                <p className='text-base text-gray mt-4'>Masuk untuk mengakses fitur yang telah tersedia pada website kami!</p>
            </div>

            <form className='flex flex-col mt-10 '>
                <div>
                    <label htmlFor="email">Alamat Email</label>
                    <input type="text" name='email' placeholder='Masukkan Email' className='mt-1 p-4 stroke-form w-full' />
                </div>
                <div className='mt-6'>
                    <label htmlFor="pass">Password</label>
                    <input type="password" name='pass' placeholder='Masukkan Password' className='mt-1 p-4 stroke-form w-full' />
                </div>
                <form action="" className='mt-6'>
                    <input type="checkbox" name='ingat'/>
                    <label htmlFor="ingat" className='ml-2 text-gray'>Ingat Akun?</label>
                </form>
            </form>

            <button type='submit' className='w-full h-[48px] sm:flex justify-center items-center text-white primary-bg rounded-lg hidden mt-10'>
                Masuk
            </button>

            <p className='text-gray mt-24'>© Hotelmu 2023 - All Rights Reserved </p>
            
        </div>
    </div>
  )
}

export default Form