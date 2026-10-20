import { useState } from "react";

interface AlunoInfo {
  nome: string;
  idade: string;
}

export default function ExemploState() {
  const [input, setInput] = useState<string>("");
  const [idade, setIdade] = useState("");

  const [infoAluno, setInfoAluno] = useState<AlunoInfo>();

  const [contador, setContador] = useState<number>(0);

  function mostrarAluno() {
    console.log("Olá, Mundo");
    setInfoAluno({
      nome: input,
      idade: idade,
    });
  }

  function diminuirContador() {
    if (contador === 0) {
      return;
    }
    setContador((valorAtual: number) => valorAtual - 1);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold m-4 text-center">
        Conhecendo useState
      </h1>
      <input
        type="text"
        placeholder="Digite o nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border mx-2 my-4 px-1"
      />
      <br />
      <input
        type="number"
        placeholder="Digite a idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        className="border mx-2 my-4 px-1"
      />
      <br />
      <button
        onClick={mostrarAluno}
        className="border mx-2 my-2 bg-slate-200 px-1 rounded-[10px] cursor-pointer hover:bg-slate-300 duration-200"
      >
        Mostrar Aluno
      </button>
      <hr />
      <h3 className="text-[19px] font-bold m-2">
        Bem vindo: {infoAluno?.nome}
      </h3>
      <h3 className="text-[19px] font-bold m-2">Idade: {infoAluno?.idade}</h3>
      <hr />
      <br />
      <h2 className="text-4xl font-bold text-center">Contador com useState</h2>
      <div className="mt-8 flex items-center justify-center">
        <button
          className="font-bold mx-2 my-2 bg-slate-200 px-4 py-2 rounded-[10px] cursor-pointer hover:bg-slate-300 duration-200"
          onClick={diminuirContador}
        >
          -
        </button>
        <h4 className="text-2xl">{contador}</h4>
        <button
          className="font-bold mx-2 my-2 bg-slate-200 rounded-[10px] px-4 py-2 cursor-pointer hover:bg-slate-300 duration-200"
          onClick={() => setContador((count: number) => count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
