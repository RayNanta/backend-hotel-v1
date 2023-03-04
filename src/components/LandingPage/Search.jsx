import React from "react";
import { bed, arrowRight, search } from "../../assets";

const Search = () => {
  return (
    <div className="w-full bg-white -mt-20 z-10 relative rounded-lg drop-shadow-md">
      <div className="flex flex-col">
        <div className="px-12 py-6 flex justify-between items-center stroke-form">
          <div className="flex">
            <img className="w-6 h-6" src={bed} alt="bed" />
            <p className="font-poppins font-medium text-xl ml-4">Temukan Kamar Disini</p>
          </div>
          <div className="flex">
            <p className="text-sm text-gray mr-2">Cari Lebih Lengkap</p>
            <img className="w-5 h-5" src={arrowRight} alt="" />
          </div>
        </div>

        <div className="flex px-12 py-6 w-full stroke-form">
            <div className="flex flex-col w-full">
                <label htmlFor="checkIn">Tgl Check In</label>
                <select name="checkIn" id="" className="bg-form p-4 border-r-[16px] border-r-[#f6f6f6] mt-2">
                    <option value="">Test</option>
                </select>
            </div>

            {/* <div className="flex flex-col w-1/2">
                <label htmlFor="checkIn">Tgl Check Out</label>
                <select name="checkIn" id="" className="bg-form p-4">
                    <option value="">Test</option>
                </select>
            </div> */}
            
        </div>

        <div className="flex justify-between w-full px-12 py-7">
            <div className="flex justify-center items-center">
                <div className="w-3 h-3 bg-[#FF7D13] rounded-full stroke-circle" />
                <p className="ml-4 text-gray">Hubungi Layanan Pelanggan Untuk Keperluan Bantuan</p>
            </div>
            <button className='w-[93px] h-[52px] sm:flex justify-center items-center text-white primary-bg rounded-lg hidden'>
                <img src={search} alt="search"  className="mr-2"/>
                Cari
            </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
