import { useState } from "react";
import logoImg from "../../assets/logo-dev-frases.png";

export default function GeradorFrases() {
  const [textoFrase, setTextoFrase] = useState<string>("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<number>(0);

  const allFrases = [
    {
      id: 1,
      categoria: "Motivação",
      frases: [
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Não espere por oportunidades extraordinárias; agarre ocasiões comuns e torne-as grandes.",
        "A disciplina é a ponte entre metas e realizações.",
        "Você não precisa ser ótimo para começar, mas precisa começar para se tornar ótimo.",
        "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        "Acredite no seu potencial: cada passo dado hoje constrói a sua conquista de amanhã.",
        "Grandes jornadas começam com a coragem de dar o primeiro passo, mesmo sem ver a escada inteira.",
        "Transforme seus obstáculos em degraus para alcançar lugares mais altos.",
        "A persistência realiza o impossível quando a motivação resolve descansar.",
        "Foque no progresso, não na perfeição; cada linha de avanço já é uma vitória.",
      ],
    },

    {
      id: 1,
      categoria: "Bom Dia",
      frases: [
        "Bom dia! Que a sua manhã comece com energia renovada e bons motivos para sorrir.",
        "Cada novo amanhecer é uma página em branco pronta para você escrever uma ótima história.",
        "Bom dia! Respire fundo, tome um bom café e faça hoje valer a pena.",
        "Que a luz deste novo dia traga clareza para suas ideias e leveza para seus passos.",
        "Acorde com determinação e vá dormir com satisfação. Tenha um excelente dia!",
        "Bom dia! Que não faltem boas notícias, produtividade e paz no seu caminho hoje.",
        "Hoje é uma nova chance de fazer diferente, aprender algo novo e chegar mais perto dos seus objetivos.",
        "Bom dia! Que a sua rotina seja leve e que cada pequeno momento traga alegria.",
        "Comece o dia acreditando que coisas boas estão a caminho. Ótima jornada!",
        "Bom dia! Espalhe gentileza por onde passar e colha bons resultados ao longo do dia.",
      ],
    },
  ];

  function handleSwitchCategory(position: number) {
    setCategoriaSelecionada(position);
    console.log(`Posição do item ${position}`);
  }

  function gerarFrase() {
    const numeroAleatorio = Math.floor(
      Math.random() * allFrases[categoriaSelecionada].frases.length,
    );

    setTextoFrase(
      `"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`,
    );
  }

  return (
    <div className="flex flex-col w-full min-h-dvh bg-slate-800 items-center py-4 px-6">
      <img
        src={logoImg}
        alt="Logo frases"
        className="w-full max-w-88 md:max-w-120"
      />

      <h1 className="my-3.5 text-3xl font-bold text-white">Categorias</h1>
      <section className="flex gap-3.5 mb-8 flex-wrap justify-center">
        {allFrases.map((item, index) => (
          <button
            className={`bg-slate-400 px-6 py-2 rounded-xl cursor-pointer text-white hover:bg-slate-500 duration-150 ${item.categoria === allFrases[categoriaSelecionada].categoria ? "border-2" : "border-0"}`}
            key={item.id}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.categoria}
          </button>
        ))}
      </section>

      <button
        className="bg-[#1fa4db] px-9 py-3 rounded-xl cursor-pointer text-[18px] text-white mb-5 hover:bg-[#1c92c5] duration-150"
        onClick={gerarFrase}
      >
        Gerar frase
      </button>

      {textoFrase !== "" && (
        <p className="bg-white rounded-md py-3.5 px-6 max-w-105 text-center text-[20px]/[150%] text-[#dd7b22] italic shadow-lg font-medium">
          {textoFrase}
        </p>
      )}
    </div>
  );
}
