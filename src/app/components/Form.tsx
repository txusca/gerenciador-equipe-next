'use client';

import { useState } from 'react';
import { Colaborador } from '../core/Colaborador';

type FormProps = {
  className?: string;
  setColaboradores?: React.Dispatch<React.SetStateAction<Colaborador[]>>;
};

// usar o .value para capturar o path da imagem
export default function Form(props: FormProps) {
  const [colaborador, setColaborador] = useState<Colaborador>({
    id: 0,
    nome: '',
    cargo: '',
    imagem: '',
    time: '',
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (props.setColaboradores) {
      props.setColaboradores((colaboradores) => {
        const maxId = colaboradores.reduce(
          (max, colab) => (colab.id > max ? colab.id : max),
          0
        );
        const newColaborador = {
          ...colaborador,
          id: maxId + 1,
          time: 'Cargo teste',
        } as Colaborador;
        return [...colaboradores, newColaborador];
      });
    }
  }

  return (
    <form className={props.className} onSubmit={handleSubmit}>
      <h2 className="text-[32px] font-prata">
        Preencha os dados para criar o card do colaborador.
      </h2>
      <div className="flex flex-col mt-11">
        <label className="font-montserrat mb-2 mt-7">Nome</label>
        <input
          className="h-20 mr-24 drop-shadow-md placeholder:pl-6"
          placeholder="Digite seu nome"
          type="text"
          name="Nome"
          value={colaborador.nome}
          onChange={(e) =>
            setColaborador({
              ...colaborador,
              nome: e.target.value,
            } as Colaborador)
          }
        />
        <label className="font-montserrat mb-2 mt-7">Cargo</label>
        <input
          className="h-20 mr-24 drop-shadow-md placeholder:pl-6"
          placeholder="Digite seu cargo"
          type="text"
          name="Cargo"
          value={colaborador.cargo}
          onChange={(e) =>
            setColaborador({
              ...colaborador,
              cargo: e.target.value,
            } as Colaborador)
          }
        />
        <label className="font-montserrat mb-2 mt-7">Imagem</label>
        <input
          className="h-20 mr-24 drop-shadow-md"
          placeholder="Informe o endereço da imagem"
          type="file"
          name="Imagem"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const imageUrl = URL.createObjectURL(file);
              setColaborador({
                ...colaborador,
                imagem: imageUrl,
              } as Colaborador);
            }
          }}
        />
        <label className="font-montserrat mb-2 mt-7">Time</label>
        <select className="h-20 mr-24 drop-shadow-md">
          <option value=""></option>
          <option value="Valor1">Valor1</option>
          <option value="Valor2">Valor2</option>
          <option value="Valor3">Valor3</option>
          <option value="Valor4">Valor4</option>
        </select>
        <button
          type="submit"
          className="bg-mainColorBlue h-20 w-40 flex justify-center items-center mt-10 rounded-[10px] cursor-pointer font-montserrat text-white text-xl hover:text-[#95FFD4]"
        >
          Criar card
        </button>
      </div>
    </form>
  );
}
