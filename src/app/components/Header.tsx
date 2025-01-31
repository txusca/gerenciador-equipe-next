import Image from 'next/image';

import logo from '/public/logo.svg';
import duostone from '/public/Imagem duotone.png';

export default function Header() {
  return (
    <div className="bg-mainColorBlue">
      <div className="container ml-auto">
        <Image className="pt-[75px]" src={logo} alt="Organo logo" />
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-7xl font-prata">Pessoas e times</h1>
            <span className="text-4xl font-montserrat">
              organizados em um só lugar!
            </span>
          </div>
          <Image className="mr-0" src={duostone} alt="Duostone image" />
        </div>
      </div>
    </div>
  );
}
