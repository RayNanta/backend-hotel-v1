import React from 'react'
import { arrowLeftRekomendasi, arrowRightRekomendasi, capacity, tipe } from '../../assets'
import { DummyListKamar } from '../../constants'

const ListKamar = () => {
  return (
    <div className='mt-20 flex flex-col'>
      <div className='flex justify-between'>
        <div className=''>
          <h1 className='text-xl font-medium'>Rekomendasi Kamar Terbaik!</h1>
          <p className='text-sm text-gray'>Iki Ngko Breadcrumbs</p>
        </div>
      </div>

      <div className='flex justify-between flex-wrap'>
        {DummyListKamar.map((room, i) => (
          <div className='flex-col  mt-14' key={i}>
            {/* <div className='w-[360px] h-[341px]'>{room.Image}</div> */}
            <img  className='w-96 ' src={room.Image} alt="" />
            <div className='mt-6'> 
              <h1 className='text-base font-semibold'>{room.title}</h1>
              <p className='text-sm mt-2'>{room.price}</p>
              <div className='flex justify-start items-center mt-4'>
                <div className='flex justify-center items-center'>
                  <img src={capacity} className='w-5' alt="kapasitas" />
                  <p className='ml-2'>{room.capacity}</p>
                </div>
                <div className='flex justify-center items-center ml-6'>
                  <img src={tipe} className='w-5' alt="tipe" />
                  <p className='ml-2'>{room.type}</p>
                </div>
            </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex mt-14'>
        <p className='text-base text-gray'>Menampilkan <span className='text-black'>9</span> Data Dari <span className='text-black'>21</span></p>
      </div>
      </div>
  )
}

export default ListKamar