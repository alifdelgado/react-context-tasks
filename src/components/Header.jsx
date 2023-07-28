import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex items-center px-5 text-white bg-cyan-600 shadow">
        <h5 className="text-2xl font-bold text-gray-200">Task crud</h5>
        <div className="flex-grow px-4 py-2 m-2 text-right">
          <Link
            to="/add"
            className="px-4 py-2 font-semibold bg-indigo-500 rounded hover:bg-indigo-700 shadow"
          >
            Add employee
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
