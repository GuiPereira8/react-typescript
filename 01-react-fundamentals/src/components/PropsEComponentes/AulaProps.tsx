import { Aluno } from "./NomeAluno";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function AulaProps() {
  return (
    <div>
      <Header title="Curso React + TypeScript" />
      <br />
      <Aluno nome="Guilherme Pereira" idade={23} />
      <br />
      <Aluno nome="Hanna Leal" idade={20} />
      <br />
      <Aluno nome="Matheus Silva" idade={26} />
      <br />
      <Footer />
    </div>
  );
}
