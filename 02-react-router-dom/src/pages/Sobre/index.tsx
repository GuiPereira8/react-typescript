import { Link } from "react-router";

export function Sobre() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Página Sobre!</h1>
      <br />
      <Link
        to={"/"}
        className="text-blue-600 rounded-md border ml-2 px-4 py-1 hover:bg-blue-600 hover:text-white duration-150"
      >
        Home
      </Link>
      <Link
        to={"/contato"}
        className="text-blue-600 rounded-md border mx-2 px-4 py-1 hover:bg-blue-600 hover:text-white duration-150"
      >
        Contato
      </Link>
      <p className="my-3 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus non,
        ab cupiditate enim quae suscipit ipsum? Soluta vel optio rerum numquam
        vero ratione, repudiandae provident? Corrupti laudantium voluptate
        quisquam provident.
      </p>
    </div>
  );
}
