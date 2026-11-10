import { useState, useEffect, useRef, useMemo } from "react";

export default function ExemploMemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true);
  const [input, setInput] = useState<string>("");

  // Inicialização preguiçosa do estado
  const [tarefas, setTarefas] = useState<string[]>(() => {
    const tarefaSalvas = localStorage.getItem("@tasklist");

    if (tarefaSalvas) {
      return JSON.parse(tarefaSalvas) as string[];
    }
    return [];
  });

  const [editTask, setEditTask] = useState({
    enable: false,
    task: "",
  });

  // O useEffect cuida APENAS de SALVAR quando a lista mudar
  useEffect(() => {
    localStorage.setItem("@tasklist", JSON.stringify(tarefas));
  }, [tarefas]);

  //usando o useRef no useEffect
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    console.log("useEffect foi chamado");
  }, [tarefas]);

  function handleRegister() {
    if (!input) {
      window.alert("Preencha o nome da sua tarefa!");
      return;
    }

    if (editTask.enable) {
      handleSaveEdit();
      return;
    }

    setTarefas((tasks) => [...tasks, input]);
    setInput("");
    localStorage.setItem("@tasklist", JSON.stringify([...tarefas, input]));
  }

  function handleSaveEdit() {
    const findIndexTask = tarefas.findIndex((task) => task === editTask.task);
    const allTasks = [...tarefas];

    allTasks[findIndexTask] = input;
    setTarefas(allTasks);

    setEditTask({
      enable: false,
      task: "",
    });
    setInput("");
  }

  function handleDelete(item: string) {
    const deletarTarefa = tarefas.filter((task) => task !== item);
    setTarefas(deletarTarefa);
  }

  function handleEdit(item: string) {
    inputRef.current?.focus();
    setInput(item);
    setEditTask({
      enable: true,
      task: item,
    });
  }

  const totalTarefas = useMemo(() => {
    return tarefas.length;
  }, [tarefas]);

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
        ref={inputRef}
        placeholder="Digite sua tarefa..."
        className="bg-slate-100 border pl-2 w-full max-w-145 h-12 rounded-xl"
      />{" "}
      <br />
      <button
        type="button"
        className="bg-slate-300 py-2 px-4 my-2 cursor-pointer hover:bg-slate-400 duration-200 rounded-[10px]"
        onClick={handleRegister}
      >
        {editTask.enable ? "Atualizar tarefa" : "Adicionar tarefa"}
      </button>
      <hr />
      <h4 className="mt-4 font-bold">Você tem {totalTarefas} tarefas!</h4>
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
