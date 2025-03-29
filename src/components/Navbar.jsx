import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Home
        </Link>
        <Link to="/cart" className="text-2xl font-bold" role="button">
          Cart
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
