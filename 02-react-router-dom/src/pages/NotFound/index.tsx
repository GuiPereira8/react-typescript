import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <h1 className="text-6xl font-bold">404</h1>
      <h3>Ops essa página não existe!</h3>
      <Link to={"/"} className="text-blue-500 hover:underline">
        Voltar para Home
      </Link>
    </div>
  );
}
