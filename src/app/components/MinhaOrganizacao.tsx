import Image from 'next/image';
import { Colaborador } from '../core/Colaborador';

import buttonImage from '/public/Botão add-01 1.png';
import Card from './Card';

type MinhaOrganizacaoProps = {
  className?: string;
  colaboradores: Colaborador[];
  times: string[];
  isActive?: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MinhaOrganizacao(props: MinhaOrganizacaoProps) {
  function handleAddColaborador() {
    props.setIsActive(!props.isActive);
  }
  return (
    <div className={`${props.className}`}>
      <div className="flex justify-center items-center grow">
        <h2 className="text-mainColorBlue text-[40px] font-prata text-center">
          Minha Organização:
        </h2>
        <button onClick={handleAddColaborador}>
          <Image className="" src={buttonImage} alt="add button" />
        </button>
      </div>
      <div className="w-16 h-1 bg-mainColorBlue mx-auto mb-20"></div>
      {props.colaboradores.length === 0 ? (
        <h3 className="font-prata text-3xl mt-9 text-center">
          Nenhum colaborador cadastrado
        </h3>
      ) : (
        <div>
          {props.times.map((time) => (
            <div key={time}>
              <div className="flex flex-col justify-center items-center pt-20 pb-20 bg-[#E8FFFF]">
                <h3 className="font-prata text-3xl mt-9">{time}</h3>
                <div className="w-8 h-1 bg-mainColorBlue mx-auto mt-2"></div>
                <div className="flex gap-6">
                  {props.colaboradores
                    .filter((colaborador) => colaborador.time === time)
                    .map((colaborador) => (
                      <Card
                        key={colaborador.id}
                        className="mt-11"
                        colaborador={colaborador}
                      />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
