import { Link } from "react-router";

export function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Bem-Vindo a página Home!</h1>
      <p>Navegue pelo site usando os links abaixo</p>
      <br />

      <Link
        to={"/sobre"}
        className="text-blue-600 rounded-md border mx-2 px-4 py-1 hover:bg-blue-600 hover:text-white duration-150"
      >
        Sobre
      </Link>
      <Link
        to={"/contato"}
        className="text-blue-600 rounded-md border mx-2 px-4 py-1 hover:bg-blue-600 hover:text-white duration-150"
      >
        Contato
      </Link>
    </div>
  );
}
