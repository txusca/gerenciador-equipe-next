import Image from 'next/image';
import type { Colaborador } from '../core/Colaborador';

import userCircle from '/public/user-circle.svg';

type CardProps = {
  className?: string;
  colaborador?: Colaborador;
};

export default function Card(props: CardProps) {
  return (
    <div
      className={`${props.className} w-[262px] h-[272px] rounded-[10px] bg-white drop-shadow-xl flex flex-col justify-center items-center`}
    >
      <Image
        className="rounded-full w-[120px] h-[120px]"
        src={props.colaborador?.imagem ? props.colaborador?.imagem : userCircle}
        alt="Colaborador image"
        width={120}
        height={120}
      />
      <div className="mt-4">
        <h4 className="font-montserrat text-lg text-center text-mainColorBlue">
          {props.colaborador?.nome}
        </h4>
        <p className="font-montserrat text-center text-[#212121]">
          {props.colaborador?.cargo}
        </p>
      </div>
    </div>
  );
}
