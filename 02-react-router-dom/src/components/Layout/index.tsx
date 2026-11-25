import { Outlet } from "react-router";
import { Header } from "../Header";

export function Layout() {
  return (
    <>
      <Header />
      {/* O <Outlet/> é onde as páginas serão exibidas/renderizadas */}
      <Outlet />
      <footer className="mt-6">
        <p>&copy;Todos os direitos do site reservados @2026</p>
      </footer>
    </>
  );
}
