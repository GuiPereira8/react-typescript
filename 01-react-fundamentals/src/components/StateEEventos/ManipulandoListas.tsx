import { useState } from "react";

export default function ManipulandoListas() {
  const [input, setInput] = useState<string>("");
  const [tarefas, setTarefas] = useState([
    "Estudar React com TypeScript",
    "Comprar pão de manhã cedo",
    "Estudar Inglês a noite",
  ]);
  const [editTask, setEditTask] = useState({
    enable: false,
    task: "",
  });

  function handleRegister() {
    if (!input) {
      window.alert("Preencha o nome da sua tarefa!");
      return;
    }
    setTarefas((tasks) => [...tasks, input]);
    setInput("");
  }
  function handleDelete(item: string) {
    const deletarTarefa = tarefas.filter((task) => task !== item);
    setTarefas(deletarTarefa);
  }

  function handleEdit(item: string) {
    setInput(item);
    setEditTask({
      enable: true,
      task: item,
    });
  }

  return (
    <div className="p-3">
      <h1 className="text-5xl text-center font-bold mt-2 mb-6">
        Lista de tarefas
      </h1>
      <input
        type="text"
        name="inTarefa"
        id="inTarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite sua tarefa..."
        className="bg-slate-200 border pl-2 w-full max-w-145 h-12 rounded-xl"
      />{" "}
      <br />
      <button
        type="button"
        className="bg-slate-300 py-2 px-4 my-2 cursor-pointer hover:bg-slate-400 duration-200 rounded-[10px]"
        onClick={handleRegister}
      >
        Adicionar tarefa
      </button>
      <hr />
      {tarefas.map((item, index) => (
        <section key={index} className="my-4">
          <span>{item}</span>
          <button
            type="button"
            onClick={() => handleEdit(item)}
            className="ml-4 px-2 bg-slate-300 rounded cursor-pointer hover:bg-slate-400 duration-300"
          >
            Editar
          </button>
          <button
            onClick={() => handleDelete(item)}
            className="ml-4 px-2 bg-slate-300 rounded cursor-pointer hover:bg-red-300 duration-300"
          >
            Excluir
          </button>
        </section>
      ))}
    </div>
  );
}
