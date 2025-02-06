'use client';

import { useState } from 'react';
import { Colaborador } from '../core/Colaborador';

type FormProps = {
  className?: string;
  times: string[];
  setColaboradores?: React.Dispatch<React.SetStateAction<Colaborador[]>>;
};

export default function ColaboradorForm(props: FormProps) {
  const [colaborador, setColaborador] = useState<Colaborador>({
    id: 0,
    nome: '',
    cargo: '',
    imagem: '',
    time: '',
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!colaborador.time) {
      alert('Por favor, selecione um time.');
      return;
    }
    if (props.setColaboradores) {
      props.setColaboradores((colaboradores) => {
        const maxId = colaboradores.reduce(
          (max, colab) => (colab.id > max ? colab.id : max),
          0
        );
        const newColaborador = {
          ...colaborador,
          id: maxId + 1,
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
          className="h-20 md:mr-24 mr-6 drop-shadow-md placeholder:pl-6 pl-4"
          placeholder="Digite seu nome"
          type="text"
          name="Nome"
          value={colaborador.nome}
          required
          onChange={(e) =>
            setColaborador({
              ...colaborador,
              nome: e.target.value,
            } as Colaborador)
          }
        />
        <label className="font-montserrat mb-2 mt-7">Cargo</label>
        <input
          className="h-20 md:mr-24 mr-6 drop-shadow-md placeholder:pl-6 pl-4"
          placeholder="Digite seu cargo"
          type="text"
          name="Cargo"
          value={colaborador.cargo}
          required
          onChange={(e) =>
            setColaborador({
              ...colaborador,
              cargo: e.target.value,
            } as Colaborador)
          }
        />
        <label className="font-montserrat mb-2 mt-7">Imagem</label>
        <input
          className="h-20 md:mr-24 mr-6 drop-shadow-md"
          placeholder="Informe o endereço da imagem"
          type="file"
          name="Imagem"
          required
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
        <select
          className="h-20 md:mr-24 mr-6 drop-shadow-md pl-4"
          required
          value={colaborador.time}
          onChange={(e) =>
            setColaborador({
              ...colaborador,
              time: e.target.value,
            } as Colaborador)
          }
        >
          <option value="" disabled>
            Selecione um time
          </option>
          {props.times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-mainColorBlue h-20 w-48 flex justify-center items-center mt-10 rounded-[10px] cursor-pointer font-montserrat text-white text-xl hover:text-[#95FFD4] whitespace-nowrap"
        >
          Criar colaborador
        </button>
      </div>
    </form>
  );
}
