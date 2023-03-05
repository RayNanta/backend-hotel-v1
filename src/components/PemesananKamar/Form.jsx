import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col p-8 stroke-box mt-14 w-full'>
        <div className='mt-4 stroke-form'>
            <h1 className='text-xl font-semibold mb-4'>Pemesanan Kamar</h1>
        </div>

        <form className='flex flex-col mb-4 stroke-form'>
            <div className='flex justify-between mt-4'>
                <div className='w-1/2 flex flex-col mb-4'>
                    <label htmlFor="checkIn" className='text-gray'>Tgl Check In</label>
                    <select type="text" name='checkIn' className="bg-form p-4 border-r-[16px] border-r-[#f6f6f6] mt-2">
                        <option value="">Test</option>
                    </select>
                </div>
                <div className='w-1/2 flex flex-col mb-4 ml-5'>
                    <label htmlFor="checkIn" className='text-gray'>Tgl Check In</label>
                    <select type="text" name='checkIn' className="bg-form p-4 border-r-[16px] border-r-[#f6f6f6] mt-2">
                        <option value="">Test</option>
                    </select>
                </div>
                <div className='w-1/2 flex flex-col mb-4 ml-5'>
                    <label htmlFor="checkIn" className='text-gray'>Tgl Check In</label>
                    <select type="text" name='checkIn' className="bg-form p-4 border-r-[16px] border-r-[#f6f6f6] mt-2">
                        <option value="">Test</option>
                    </select>
                </div>
            </div>

            <div className='flex justify-between mt-4'>
                <div className='w-1/2 flex flex-col mb-4'>
                    <label htmlFor="checkIn" className='text-gray'>Tgl Check In</label>
                    <select type="text" name='checkIn' className="bg-form p-4 border-r-[16px] border-r-[#f6f6f6] mt-2">
                        <option value="">Test</option>
                    </select>
                </div>
                <div className='w-1/2 flex flex-col mb-4 ml-5'>
                    <label htmlFor="checkIn" className='text-gray'>Tgl Check In</label>
                    <select type="text" name='checkIn' className="bg-form p-4 border-r-[16px] border-r-[#f6f6f6] mt-2">
                        <option value="">Test</option>
                    </select>
                </div>
            </div>
        </form>

        <div className='flex flex-col mb-4 stroke-form'>
            <h1 className='text-sm font-medium mt-4'>Rincian Biaya</h1>
            <div className='mt-2 mb-4 '>
                 <div className='bg-box flex flex-col p-4 '>
                    <div className='flex justify-between'>
                        <p className='text-sm text-gray'>Tipe Kamar</p>
                        <p className='text-sm font-semibold'>Room Orchid</p>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <p className='text-sm text-gray'>Lama Penginapan</p>
                        <p className='text-sm font-semibold'>3 Malam</p>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <p className='text-sm text-gray'>Total Harga</p>
                        <p className='text-sm font-semibold'>Rp3.000.000</p>
                    </div>
                </div>
            </div>
        </div>

        <button className='w-full h-[52px] text-white primary-bg rounded-lg hidden sm:block mt-4'>
            Pesan Sekarang
        </button>

        <p className='text-center text-sm text-gray mt-4'>Pastikan Semua Data Telah Terisi Dengan Benar</p>

    </div>
  )
}

export default Form