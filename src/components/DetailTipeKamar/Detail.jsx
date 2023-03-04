import React from 'react'
import { bed, personRiwayat, room1, room2 } from '../../assets'

const Detail = () => {
  return (
    <div className='flex flex-col mt-20'>
        <div className='flex justify-between'>
            <img className='w-[820px] object-cover' src={room1} alt="room1" />
            <img className='w-[396px] object-cover' src={room2} alt="room2" />
        </div>

        <div className='flex justify-between mt-10'>
            <div className='flex'>
                <div className='flex p-2'>
                    <img src={personRiwayat} alt="" />
                    <p className='ml-2'>2 Orang</p>
                </div>
                <div className='ml-6 flex justify-center items-center p-2'>
                    <img src={bed} alt="" />
                    <p className='ml-2'>King Size</p>
                </div>
                <div className='ml-6 flex justify-center items-center p-2'>
                    <img src={bed} alt="" />
                    <p className='ml-2'>Room 007</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail