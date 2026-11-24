import { Link } from "react-router";
export function Contato() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Bem vindo a página contatos!</h1>
      <Link
        to={"/"}
        className="text-blue-600 rounded-md border ml-2 px-4 py-1 hover:bg-blue-600 hover:text-white duration-150"
      >
        Home
      </Link>
      <Link
        to={"/sobre"}
        className="text-blue-600 rounded-md border mx-2 px-4 py-1 hover:bg-blue-600 hover:text-white duration-150"
      >
        Sobre
      </Link>
      <h3 className="font-bold mb-2 mt-6">Telefone: (99)1234-5678</h3>
      <h3 className="font-bold my-3">E-mail: awsteste123@exemplo.com</h3>
    </div>
  );
}
