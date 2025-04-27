import {
  FaHome,
  FaBell,
  FaShoppingBag,
  FaCommentDots,
  FaWallet,
  FaMoneyBill,
  FaUser,
  FaCog,
  FaEye,
} from "react-icons/fa";
import { useState } from "react";

const menuItems = [
  { icon: <FaHome size={20} />, label: "Home" },
  { icon: <FaBell size={20} />, label: "Notifications" },
  { icon: <FaShoppingBag size={20} />, label: "Shop" },
  { icon: <FaCommentDots size={20} />, label: "Conversation" },
  { icon: <FaWallet size={20} />, label: "Wallet" },
  { icon: <FaMoneyBill size={20} />, label: "Subscription" },
  { icon: <FaUser size={20} />, label: "My Profile" },
  { icon: <FaCog size={20} />, label: "Settings" },
];

export default function SideMenu() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col justify-between h-screen w-full bg-white p-6 shadow-md rounded-lg">
      <div className="space-y-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center cursor-pointer p-2 rounded-md relative group ${
              activeIndex === index
                ? "text-black font-semibold"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {/* Fixed width for left side */}
            <div className="flex items-center" style={{ width: "8px" }}>
              {activeIndex === index && (
                <div className="h-6 w-1 bg-[#88C2BB] rounded-r-md"></div>
              )}
            </div>

            {/* Icon and Text */}
            <div className="flex items-center space-x-4 ml-2">
              {item.icon}
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Logout button */}
      <div className="flex items-center space-x-4 text-teal-500 cursor-pointer">
        <FaEye size={20} />
        <span>Log out</span>
      </div>
    </div>
  );
}
