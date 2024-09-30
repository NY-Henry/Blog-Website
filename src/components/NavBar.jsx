import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="mx-auto flex max-w-[600px] items-center justify-between rounded-sm py-20 shadow-lg">
      <h1 className="ml-6 rounded p-2 text-3xl font-bold text-red-400 drop-shadow-lg">
        NY Blog
      </h1>
      <div className="mr-6 flex flex-col items-center justify-center gap-0 text-2xl font-bold text-red-400 shadow-xl shadow-red-100 sm:flex-row sm:gap-4 sm:shadow-none">
        <Link to="/" className="w-full text-center">
          <p className="rounded-md bg-white px-4 py-2 shadow-lg hover:shadow-md active:scale-95 sm:border sm:shadow-none">
            Home
          </p>
        </Link>
        <hr />
        <Link to="/create" className="w-full text-center">
          <p className="rounded-md px-4 py-2 shadow-lg hover:bg-white active:bg-slate-100 sm:border sm:shadow-green-100">
            New Blog
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
