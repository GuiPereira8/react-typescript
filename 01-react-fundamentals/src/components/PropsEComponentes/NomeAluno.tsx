// interface NomeAluno {
//     nome:string;
//     idade: number;
// }

// Forma de tipagem de props abaixo é uma alternativa, caso tenha mais de 2 propriedade usar interface normal.
export function Aluno({ nome, idade }: { nome: string; idade: number }) {
  return (
    <div>
      <h2>{nome}</h2>
      <h3>{idade}</h3>
    </div>
  );
}
