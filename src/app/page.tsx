'use client';

import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import { Colaborador } from './core/Colaborador';
import MinhaOrganizacao from './components/MinhaOrganizacao';

import user from '/public/user.jpg';

export default function Home() {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([
    new Colaborador(1, 'Fulano', 'Desenvolvedor', user.src, 'Time1'),
    new Colaborador(2, 'Ciclano', 'Designer', user.src, 'Time2'),
    new Colaborador(3, 'Beltrano', 'Gerente', user.src, 'Time3'),
  ]);

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Header />
      {isActive && (
        <Form
          className="flex flex-col pl-24 py-[33px] bg-mainColorGrey mx-80 rounded-[20px] mt-20 drop-shadow-lg mb-10 "
          setColaboradores={setColaboradores}
        />
      )}
      <MinhaOrganizacao
        colaboradores={colaboradores}
        setIsActive={setIsActive}
        isActive={isActive}
      />
    </div>
  );
}
