//import { useState } from "react";
import logoImg from "../../assets/logo-dev-frases.png";
export default function GeradorFrases() {
  return (
    <div className="flex flex-col w-full min-h-dvh bg-slate-800 items-center md:bg-[#3737aa] xl:bg-[#a6d12f] py-4 px-6">
      <img
        src={logoImg}
        alt="Logo frases"
        className="w-full max-w-88 md:max-w-120"
      />

      <h1 className="my-3.5 text-3xl font-bold text-white">Categorias</h1>
      <section className="flex gap-3.5 mb-8 flex-wrap justify-center">
        <button className="bg-slate-400 px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-slate-500 duration-150">
          Motivação
        </button>
        <button className="bg-slate-400 px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-slate-500 duration-150">
          Bem estar
        </button>
      </section>

      <button className="bg-[#1fa4db] px-9 py-3 rounded-xl cursor-pointer text-[18px] text-white mb-5 hover:bg-[#1c92c5] duration-150">
        Gerar frase
      </button>
      <p className="bg-white rounded-md py-3.5 px-6 max-w-105 text-center text-[18px]/[150%] text-[#dd7b22] italic shadow-lg">
        Campo onde a frase vai ser gerada "Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Neque?"
      </p>
    </div>
  );
}
