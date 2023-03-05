import React from 'react'
import { bed, bedDetailKamar1, bedDetailKamar2, personDetailKamar, personRiwayat, room1, room2 } from '../../assets'

const Detail = () => {
  return (
    <div className='flex flex-col mt-20'>
        <div className='flex justify-between'>
            <img className='w-[820px] object-cover' src={room1} alt="room1" />
            <img className='w-[396px] object-cover' src={room2} alt="room2" />
        </div>

        <div className='flex justify-between'>
            <div>
                <div className='flex justify-between mt-10'>
                    <div className='flex'>
                        <div className='flex p-2 bg-person-dKamar'>
                            <img src={personDetailKamar} alt="" />
                            <p className='ml-2 text-blue'>2 Orang</p>
                        </div>
                        <div className='ml-6 flex justify-center items-center p-2 bg-type-dKamar'>
                            <img src={bedDetailKamar1} alt="" />
                            <p className='ml-2 text-orange'>King Size</p>
                        </div>
                        <div className='ml-6 flex justify-center items-center p-2 bg-noRoom-dKamar'>
                            <img src={bedDetailKamar2} alt="" />
                            <p className='ml-2'>Room 007</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mt-6'>
                    <h1 className='font-semibold text-2xl'>Kamar Orchidio Lavandera Luxury</h1>
                    <p><span className='text-xl font-medium mt-4'>Rp1.000.000</span><span className='text-sm text-gray'> per malam</span></p>
                    <p className='text-gray text-sm mt-8 w-[820px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <br /> <br />
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
                    </p>
                </div>
            </div>

            <div className='p-4 stroke-box mt-10 w-[400px] flex flex-col'>
                <div className='mt-4 stroke-form'>
                    <h1 className='text-xl font-semibold mb-4'>Rincian Harga</h1>
                </div>

                <form className='flex mt-4 stroke-form'>
                    <div className='w-1/2 flex flex-col mb-4'>
                        <label htmlFor="checkIn" className='text-gray'>Tgl Check In</label>
                        <select type="text" name='checkIn' className="bg-form p-4 border-r-[16px] border-r-[#f6f6f6] mt-2">
                            <option value="">Test</option>
                        </select>
                    </div>
                    <div className='w-1/2 flex flex-col ml-5'>
                        <label htmlFor="checkIn" className='text-gray'>Tgl Check In</label>
                        <select type="text" name='checkIn' className="bg-form p-4 border-r-[16px] border-r-[#f6f6f6] mt-2">
                            <option value="">Test</option>
                        </select>
                    </div>
                </form>

                <div className='flex flex-col'>
                    <h1 className='text-sm font-medium mt-4'>Rincian Kamar</h1>
                    <div className='mt-2 mb-4 '>
                        <div className='bg-box flex flex-col p-4 '>
                            <div className='flex justify-between'>
                                <p className='text-sm text-gray'>Tipe Kamar</p>
                                <p className='text-sm'>Room Orchid</p>
                            </div>
                            <div className='flex justify-between mt-3'>
                                <p className='text-sm text-gray'>Lama Penginapan</p>
                                <p className='text-sm'>3 Malam</p>
                            </div>
                            <div className='flex justify-between mt-3'>
                                <p className='text-sm text-gray'>Total Harga</p>
                                <p className='text-sm'>Rp3.000.000</p>
                            </div>
                        </div>
                    </div>

                    <button className='w-full h-[52px] text-white primary-bg rounded-lg hidden sm:block mt-4'>
                        Pesan Sekarang
                    </button>

                    <p className='text-center text-sm text-gray mt-4'>Anda Belum Akan Dikenakan Biaya</p>

                </div>
            </div>

            </div>

    </div>
  )
}

export default Detail