import { useState, type FormEvent } from "react";

export function DescubraIdade() {
  const [inputNome, setInputNome] = useState<string>();
  const [inputIdade, setInputIdade] = useState<string>("");
  const [anoResultado, setAnoResultado] = useState<number>(0);
  const [load, setLoad] = useState<boolean>(false);

  function verificar(e: FormEvent) {
    const anoAtual = new Date().getFullYear();
    const anoNum = Number(inputIdade);
    const idadeAtual = anoAtual - anoNum;

    setAnoResultado(idadeAtual);
    setLoad(true);
    e.preventDefault();
  }

  return (
    <div className="flex items-center justify-center flex-col h-dvh bg-slate-900">
      <h1 className="text-4xl font-bold mb-8 text-white">Descubra sua idade</h1>

      <form
        onSubmit={verificar}
        className="flex flex-col w-full max-w-md bg-white p-6 rounded-2xl mb-3"
      >
        <label htmlFor="inNome" className="text-[18px] font-semibold mb-2">
          Digite seu nome:
        </label>
        <input
          type="text"
          name="inNome"
          id="inNome"
          value={inputNome}
          required
          onChange={(e) => setInputNome(e.target.value)}
          placeholder="Digite seu nome"
          className="border bg-slate-600 placeholder:text-white px-2 py-3 rounded-xl mb-6 text-white w-full"
        />
        {/*  */}
        <label htmlFor="inIdade" className="text-[18px] font-semibold mb-2">
          Digite o ano que nasceu:
        </label>
        <input
          type="number"
          name="inIdade"
          id="inIdade"
          value={inputIdade}
          onChange={(e) => setInputIdade(e.target.value)}
          required
          autoComplete="off"
          placeholder="Digite o ano de nascimento"
          className="border bg-slate-600 placeholder:text-white px-2 py-3 rounded-xl mb-6 text-white w-full"
        />
        <input
          type="submit"
          value="Descobrir idade"
          className="bg-sky-400 px-4 py-4 cursor-pointer rounded-xl font-bold"
        />
      </form>
      {load === true && (
        <h3 className="text-white my-8 text-2xl font-bold">
          {inputNome} você tem: {anoResultado} anos
        </h3>
      )}
    </div>
  );
}
