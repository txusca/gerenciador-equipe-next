import { useState } from 'react';

type TimeFormProps = {
  className?: string;
  times: string[];
  setTimes?: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function TimeForm(props: TimeFormProps) {
  const [time, setTime] = useState<string>('');
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (props.setTimes) {
      props.setTimes((times) => {
        if (!times.includes(time)) {
          return [...times, time];
        }
        return times;
      });
    }
  }

  return (
    <form className={props.className} onSubmit={handleSubmit}>
      <h2 className="text-[32px] font-prata">
        Preencha os dados para criar um time.
      </h2>
      <div className="flex flex-col mt-11">
        <label className="font-montserrat mb-2 mt-7">Time</label>
        <input
          className="h-20 mr-24 drop-shadow-md placeholder:pl-6 pl-4"
          placeholder="Digite o nome do time"
          type="text"
          name="Time"
          value={time}
          required
          onChange={(event) => setTime(event.target.value)}
        />
        <button
          type="submit"
          className="bg-mainColorBlue h-20 w-40 flex justify-center items-center mt-10 rounded-[10px] cursor-pointer font-montserrat text-white text-xl hover:text-[#95FFD4]"
        >
          Criar time
        </button>
      </div>
    </form>
  );
}
