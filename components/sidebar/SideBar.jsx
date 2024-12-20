import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRegSun,
  FaFlag,
  FaCity,
  FaMap,
  FaChartBar,
  FaStore,
  FaUtensils,
  FaTags,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { AiOutlinePoweroff } from "react-icons/ai";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaLandmarkFlag } from "react-icons/fa6";


const menuItems = [
  {
    icon: <LuLayoutDashboard className="w-[22px] h-[22px] text-gray-700"/>,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: <FaLandmarkFlag  className="w-[22px] h-[22px] text-gray-700"/>,
    label: "Countries",
    subItems: [
      { label: "Country 1", path: "/country1" },
      { label: "Country 2", path: "/country2" },
      { label: "Country 3", path: "/country3" },
    ],
  },
  {
    icon: <FaCity  className="w-[22px] h-[22px] text-gray-700"/>,
    label: "City",
    subItems: [
      { label: "City 1", path: "/city1" },
      { label: "City 2", path: "/city2" },
      { label: "City 3", path: "/city3" },
    ],
  },
  {
    icon: <FaMap className="w-[22px] h-[22px] text-gray-700"/>,
    label: "Area",
    subItems: [
      { label: "Area 1", path: "/area1" },
      { label: "Area 2", path: "/area2" },
    ],
  },
  {
    icon: <FaChartBar className="w-[22px] h-[22px] text-gray-700"/>,
    label: "Zone",
    subItems: [
      { label: "Zone 1", path: "/zone1" },
      { label: "Zone 2", path: "/zone2" },
    ],
  },
  {
    icon: <FaUtensils className="w-[22px] h-[22px] text-gray-700"/>,
    label: "Restaurant",
    subItems: [
      { label: "Restaurant Setup", path: "/restaurantsetup" },
      { label: "Restaurant Menu Setup", path: "/restaurantmenusetup" },
      { label: "Assign Menu Choose", path: "/assignmenuchoose" },
    ],
  },
  {
    icon: <FaStore className="w-[22px] h-[22px] text-gray-700"/>,
    label: "Branch",
    subItems: [
      { label: "Branch 1", path: "/branch1" },
      { label: "Branch 2", path: "/branch2" },
    ],
  },
  {
    icon: <FaTags className="w-[22px] h-[22px] text-gray-700"/>,
    label: "Discounts",
    subItems: [
      { label: "Discount 1", path: "/discount1" },
      { label: "Discount 2", path: "/discount2" },
    ],
  },
  {
    icon: <FaShoppingCart className="w-[22px] h-[22px] text-gray-700"/>,
    label: "Orders",
    subItems: [
      { label: "Order 1", path: "/order1" },
      { label: "Order 2", path: "/order2" },
    ],
  },
  {
    icon: <FaUsers className="w-[22px] h-[22px] text-gray-700"/>,
    label: "Customers",
    subItems: [
      { label: "Customer 1", path: "/customer1" },
      { label: "Customer 2", path: "/customer2" },
    ],
  },
];

const Sidebar = ({ collapsed }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState("");
  const navigate = useNavigate();

  const handleNavigation = (path, label) => {
    setSelectedSubMenu(label);
    navigate(path);
  };

  const handleDropdownToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`bg-white p-3 h-screen ${
        collapsed ? "w-20" : "w-64"
      } flex flex-col justify-between font-poppins border-r transition-all duration-300`}
    >
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <div key={index}>
            <div
              onClick={() =>
                item.subItems
                  ? handleDropdownToggle(index)
                  : handleNavigation(item.path, item.label)
              }
              className={`flex items-center p-2 rounded-md cursor-pointer ${
                openIndex === index ? "bg-[#FD4B6D] text-white" : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center">
                {item.icon}
                {!collapsed && <span className="ml-4 text-base">{item.label}</span>}
              </div>
              {!collapsed && item.subItems && (
                openIndex === index ? (
                  <MdKeyboardArrowDown className="w-5 h-5" />
                ) : (
                  <MdKeyboardArrowRight className="w-5 h-5" />
                )
              )}
            </div>
            {!collapsed &&
              openIndex === index &&
              item.subItems && (
                <div className="ml-10 space-y-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      onClick={() => handleNavigation(subItem.path, subItem.label)}
                      className={`p-2 rounded-md cursor-pointer ${
                        selectedSubMenu === subItem.label
                          ? "font-bold text-gray-800 text-base"
                          : "text-gray-600"
                      }`}
                    >
                      {subItem.label}
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>

      <div className="flex justify-center p-4 h-screen cursor-pointer">
        <AiOutlinePoweroff className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
};

export default Sidebar;
