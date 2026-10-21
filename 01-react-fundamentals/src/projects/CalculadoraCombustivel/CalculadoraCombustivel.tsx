//import { useState } from "react";
import logoImg from "../../assets/logo.png";

export default function CalculadoraCombustivel() {
  return (
    <div className="bg-[#22272e] h-dvh flex justify-center items-center flex-col">
      {/*  */}
      <main className="flex items-center justify-center flex-col max-w-180 px-6 gap-4">
        <img src={logoImg} alt="Logo da maquina de combustível" />
        <h1 className="text-4xl text-white">Qual a melhor opção?</h1>

        <form>
          <label htmlFor="inAlcool">Álcool (preço por litro): </label>
          <input
            type="number"
            name="inAlcool"
            id="inAlcool"
            placeholder="4,90"
            step={0.01}
            required
            className="bg-white px-1 border"
          />
          <label htmlFor="inGasolina">Gasolina (preço por litro): </label>
          <input
            type="number"
            name="inGasolina"
            id="inGasolina"
            placeholder="4,90"
            step={0.01}
            required
            className="bg-white px-1 border"
          />
          <input type="submit" value="Calcular" className="bg-white px-2 " />
        </form>
      </main>
    </div>
  );
}
