import { useState } from "react";

export function ExemploCondicional() {
  const [signed, setSigned] = useState<boolean>(false);

  return (
    <div>
      {signed ? (
        <div>
          <h1 className="text-4xl font-bold">Bem vindo Guilherme</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl font-bold">Nenhum usuário logado!</h1>
        </div>
      )}
      <button
        onClick={() => setSigned(true)}
        className="bg-slate-200 p-2 cursor-pointer"
      >
        Fazer login
      </button>
    </div>
  );
}
