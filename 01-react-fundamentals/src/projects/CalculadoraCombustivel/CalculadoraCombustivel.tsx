import { useState } from "react";
import type { FormEvent } from "react";
import logoImg from "../../assets/logo.png";

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

export default function CalculadoraCombustivel() {
  const [gasolinaInput, setGasolinaInput] = useState<number>(0);
  const [alcoolInput, setAlcoolInput] = useState<number>(0);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();
    const calculo = alcoolInput / gasolinaInput;
    console.log(calculo);

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar Álcool!",
        alcool: alcoolInput.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        gasolina: gasolinaInput.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      });
    } else {
      setInfo({
        title: "Compensa usar Gasolina!",
        alcool: alcoolInput.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        gasolina: gasolinaInput.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      });
    }
  }

  return (
    <div className="bg-[#22272e] min-h-dvh flex justify-center items-center flex-col">
      {/*  */}
      <main className="flex items-center justify-center flex-col  h-full max-w-180 px-6 gap-4">
        <img
          src={logoImg}
          alt="Logo da maquina de combustível"
          className="max-w-56"
        />
        <h1 className="text-4xl text-white text-center my-6 font-bold">
          Qual a melhor opção?
        </h1>

        <form onSubmit={calcular}>
          <label htmlFor="inAlcool" className="text-white text-[20px]">
            Álcool (preço por litro):{" "}
          </label>
          <input
            type="number"
            name="inAlcool"
            id="inAlcool"
            placeholder="4,90"
            step={0.1}
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
            required
            className="bg-white px-4 mb-6 mt-2 w-full h-12 rounded-2xl text-[20px]"
          />
          <label htmlFor="inGasolina" className="text-white text-[20px]">
            Gasolina (preço por litro):{" "}
          </label>
          <input
            type="number"
            name="inGasolina"
            id="inGasolina"
            placeholder="4,90"
            step={0.1}
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
            required
            className="bg-white px-4 mb-6 mt-2 w-full h-12 rounded-2xl text-[20px]"
          />
          <input
            type="submit"
            value="Calcular"
            className="px-2 w-full h-12 rounded-2xl bg-blue-500 text-white font-bold text-[22px] cursor-pointer mb-2"
          />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="flex gap-1 bg-green-500 w-full max-w-105 rounded-xl text-center flex-col py-6 hover:scale-[1.06] transition my-4">
            <h2 className="text-2xl font-bold text-white mb-4">
              {info?.title}
            </h2>

            <span className="text-white mb-1 text-[18px]">
              Álcool {info?.alcool}
            </span>
            <span className="text-white mb-1 text-[18px]">
              Gasolina {info?.gasolina}
            </span>
          </section>
        )}
      </main>
    </div>
  );
}
