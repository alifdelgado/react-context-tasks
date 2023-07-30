import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 text-white bg-gray-700 shadow">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-200 hover:text-gray-300"
        >
          Task crud
        </Link>
        <div className="px-4 py-2 m-2 text-right">
          <Link
            to="/add"
            className="flex items-center gap-2 px-4 py-2 font-semibold bg-indigo-700 rounded shadow hover:bg-indigo-500"
          >
            <FaUserPlus />
            Add task
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
