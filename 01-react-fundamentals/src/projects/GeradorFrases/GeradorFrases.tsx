//import { useState } from "react";
import logoImg from "../../assets/logo-dev-frases.png";
export default function GeradorFrases() {
  return (
    <div className="flex flex-col w-full min-h-dvh bg-blue-200 items-center md:bg-amber-200 xl:bg-[#121212]">
      <img src={logoImg} alt="Logo frases" className="max-w-88" />

      <h1 className="my-3.5 text-2xl font-bold">Categorias</h1>
      <section className="flex gap-3.5 mb-8">
        <button className="bg-slate-500 px-6 py-2 rounded-xl cursor-pointer text-white">
          Motivação
        </button>
        <button className="bg-slate-500 px-6 py-2 rounded-xl cursor-pointer text-white">
          Bem estar
        </button>
      </section>

      <button className="bg-[#1fa4db] px-9 py-3 rounded-xl cursor-pointer text-[18px] text-white mb-4">
        Gerar frase
      </button>
      <p className="bg-white rounded-md py-3.5 px-6 w-105 text-center text-[18px]/[150%] text-[#dd7b22] italic">
        Campo onde a frase vai ser gerada Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Neque?
      </p>
    </div>
  );
}
