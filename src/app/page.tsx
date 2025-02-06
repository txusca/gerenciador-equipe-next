'use client';

import { useState } from 'react';
import ColaboradorForm from './components/ColaboradorForm';
import Header from './components/Header';
import { Colaborador } from './core/Colaborador';
import MinhaOrganizacao from './components/MinhaOrganizacao';

import TimeForm from './components/TimeForm';

export default function Home() {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  const [times, setTimes] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Header />
      <TimeForm
        setTimes={setTimes}
        times={times}
        className="flex flex-col pl-6 md:pl-24 py-8 md:py-[33px] bg-mainColorGrey mx-4 md:mx-80 rounded-[20px] mt-10 md:mt-20 drop-shadow-lg mb-5 md:mb-10"
      />
      <div
        className={`transition-all duration-500 ${
          isActive && times.length > 0
            ? 'max-h-full opacity-100'
            : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        {times.length > 0 && (
          <ColaboradorForm
            className="flex flex-col pl-6 md:pl-24 py-8 md:py-[33px] bg-mainColorGrey mx-4 md:mx-80 rounded-[20px] mt-10 md:mt-20 drop-shadow-lg mb-5 md:mb-10"
            times={times}
            setColaboradores={setColaboradores}
          />
        )}
      </div>
      <MinhaOrganizacao
        colaboradores={colaboradores}
        setIsActive={setIsActive}
        times={times}
        isActive={isActive}
      />
    </div>
  );
}
