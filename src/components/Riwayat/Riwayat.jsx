import React from "react";
import { capacity, capacityRiwayat, dateRiwayat, durationRiwayat, personRiwayat } from "../../assets";
import { DummyRiwayat } from "../../constants";

const ListPemesanan = () => {
  return (
    <div className="mt-20 flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-medium">Rekomendasi Kamar Terbaik!</h1>
          <p className="text-sm text-gray">Iki Ngko Breadcrumbs</p>
        </div>
        <div>
          <select name="filter" id="" className="bg-form p-4 border-r-[16px] border-r-[#f6f6f6] mt-2">
            <option className="text-gray" value="">Dari Terbaru</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col mt-14">
        {DummyRiwayat.map((riwayat, i) => (
          <div className={`mt-5 w-full px-4 py-6 stroke-form`}>
              <div className="flex justify-between">
                <h1 className="text-base font-medium">{riwayat.room}</h1>
                <div className="px-3 py-2 bg-orange text-orange">
                  {riwayat.status}
                </div>
              </div>

              <div className='flex justify-between mt-2'>
                <div className={`flex `}>
                  <div className="flex">
                    <img src={personRiwayat} className='w-5' alt="person" />
                    <p className="text-gray text-sm ml-2">{riwayat.person}</p>
                  </div>
                  <div className="flex ml-10">
                    <img src={durationRiwayat} className='w-5' alt="person" />
                    <p className="text-gray text-sm ml-2">{riwayat.duration}</p>
                  </div>
                  <div className="flex ml-10">
                    <img src={capacityRiwayat} className='w-5' alt="person" />
                    <p className="text-gray text-sm ml-2">{riwayat.room}</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex justify-center items-center">
                    <img src={dateRiwayat} className='w-5' alt="date" />
                    <p className="text-gray text-sm ml-2">{riwayat.date}</p>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <div className='flex mt-14'>
          <p className='text-base text-gray'>Menampilkan <span className='text-black'>9</span> Data Dari <span className='text-black'>21</span></p>
        </div>
      </div>

    </div>
  );
};

export default ListPemesanan;
