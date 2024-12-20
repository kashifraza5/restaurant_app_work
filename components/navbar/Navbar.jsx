import { FaBars } from "react-icons/fa6";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-[#FD4B6D] h-14 p-2 font-poppins">
      <div className="mx-4">
        <div className="flex space-x-5 text-white">
          <h1 className="text-white text-3xl font-bold">Rock Group</h1>
          <FaBars
            className="text-white mt-2 w-[22px] h-[22px] cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
