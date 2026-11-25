import { Link } from "react-router";

export function Header() {
  return (
    <header className="w-full h-18 bg-[#121212] flex flex-row justify-between items-center px-6">
      <h2 className="text-white text-2xl">CodeWiki</h2>
      <nav className="text-white flex gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/sobre"}>Sobre</Link>
        <Link to={"/contato"}>Contato</Link>
      </nav>
      <button className="hidden sm:block text-white cursor-pointer bg-amber-400 px-4 py-1 rounded-lg w-30 font-bold">
        Button
      </button>
    </header>
  );
}
