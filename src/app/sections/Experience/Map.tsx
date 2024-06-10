import React from 'react';
import map from "../../../../public/assets/india.svg"
import Image from 'next/image';
export const locations = [
    { id: 1, year: 2017, state: 'Uttar Pradesh', name: 'Noida(Vidhan Sabha)', x: '49%', y: '35%' },
    { id: 2, year: 2017, state: 'Gujarat', name: 'Rapar(Vidhan Sabha)', x: '40%', y: '50%' },
    { id: 3, year: 2018, state: 'Chattisgarh', name: 'Bhilai Nagar(Vidhan Sabha)', x: '45%', y: '60%' },
    { id: 4, year: 2019, state: 'Uttar Pradesh', name: 'Lucknow(Lok Sabha)', x: '50%', y: '40%' },
    { id: 5, year: 2019, state: 'Uttar Pradesh', name: 'JaunPur (Lok Sabha)', x: '55%', y: '45%' },
    { id: 6, year: 2019, state: 'Maharashtra', name: 'Ghat Kopar West (Vidhan Sabha)', x: '30%', y: '70%' },
    { id: 7, year: 2020, state: 'Bihar', name: 'Digha (Vidhan Sabha)', x: '60%', y: '30%' },
    { id: 8, year: 2021, state: 'Assam', name: 'Co-Ordinator (Vidhan Sabha)', x: '80%', y: '20%' },
    { id: 9, year: 2022, state: 'Uttar Pradesh', name: 'Noida(Vidhan Sabha)', x: '55%', y: '35%' },
    { id: 10, year: 2022, state: 'Uttar Pradesh', name: 'Kerakat (Vidhan Sabha)', x: '55%', y: '40%' },
    { id: 11, year: 2022, state: 'Uttar Pradesh', name: 'Zafarabad(Vidhan Sabha)', x: '55%', y: '45%' },
    { id: 12, year: 2022, state: 'Uttar Pradesh', name: 'Malhani (Vidhan Sabha)', x: '55%', y: '50%' },
    { id: 13, year: 2022, state: 'Gujarat', name: 'Surashtra(Vidhan Sabha)', x: '40%', y: '55%' },
    { id: 14, year: 2023, state: 'Tripura', name: 'Tripura(Vidhan Sabha)', x: '90%', y: '10%' },
    { id: 15, year: 2023, state: 'Madhya Pradesh', name: 'Khurai(Vidhan Sabha)', x: '50%', y: '60%' },
    { id: 16, year: 2023, state: 'Madhya Pradesh', name: 'Chandla', x: '50%', y: '65%' },
    { id: 17, year: 2023, state: 'Madhya Pradesh', name: 'Seoni(Vidhan Sabha)', x: '50%', y: '70%' },
    { id: 18, year: 2023, state: 'Madhya Pradesh', name: 'Barghat(Vidhan Sabha)', x: '50%', y: '75%' },
    { id: 19, year: 2023, state: 'Madhya Pradesh', name: 'Keolari(Vidhan Sabha)', x: '50%', y: '80%' },
    { id: 20, year: 2024, state: 'Odisha', name: 'Kandhmal (Loksabha)', x: '70%', y: '50%' },
    { id: 21, year: 2024, state: 'Odisha', name: 'Korei (Vidhan Sabha)', x: '70%', y: '55%' },
];


const IndiaMap: React.FC = () => {
  return (
    <div className="relative w-full h-full flex justify-center">
      <Image alt='' src={map}></Image>
      {locations.map((location) => (
        <div
          key={location.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: location.y, left: location.x }}
        >
          <div className="bg-red-500 w-4 h-4 rounded-full"></div>
          <div className="bg-white p-2 shadow-lg rounded-lg mt-2 text-xs">
            <h3 className="font-bold">{location.name}</h3>
            <p>{location.year}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndiaMap;
