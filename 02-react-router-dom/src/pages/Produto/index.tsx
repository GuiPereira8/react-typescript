import { useParams } from "react-router";

export function Produto() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Bem vindo ao produto {id}</h1>
    </div>
  );
}
