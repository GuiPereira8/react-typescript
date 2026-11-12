import { useState } from "react";

export function ExemploCondicional() {
  const [signed, setSigned] = useState<boolean>(false);
  const [userName, setUserName] = useState("Guilherme");
  return (
    <div>
      {signed ? (
        <div>
          <h1 className="text-4xl font-bold">Bem vindo Guilherme</h1>
          <p className="mb-4">🟢Usuário online!</p>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl font-bold mb-4">Nenhum usuário logado!</h1>
        </div>
      )}

      {signed ? (
        <button
          onClick={() => setSigned(false)}
          className="bg-slate-300 mb-2 cursor-pointer px-6 py-1 rounded-2xl"
        >
          Sair
        </button>
      ) : (
        <button
          onClick={() => setSigned(true)}
          className="bg-slate-300 mb-2 cursor-pointer px-4 py-1 rounded-2xl"
        >
          Entrar
        </button>
      )}
      <br />
      <hr />
      <br />
      <div>{userName.length >= 8 && <h1>Username muito grande!</h1>}</div>
    </div>
  );
}
