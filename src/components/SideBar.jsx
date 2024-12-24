import React, { useState } from 'react';
import { BiHome } from "react-icons/bi";
import { LuCodeXml, LuBookText, LuLogOut } from "react-icons/lu";
import { HiOutlineCloud } from "react-icons/hi2";
import { IoSettingsOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ selectedRepo, setSelectedRepo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ icon, text, active }) => (
    <div className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer ${
      active ? 'bg-blueDarkColor hover:bg-blueDarkColor/90 text-primaryWhite' : 'hover:bg-gray-100'
    }`}>
      {icon}
      <span>{text}</span>
    </div>
  );

  const MobileMenu = () => (
    <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={() => setIsOpen(false)}></div>
      <div className="relative bg-primaryWhite border-r border-strokeColor h-auto w-full">
        <div className="p-4 border-b border-strokeColor flex justify-between items-center">
          <img src="/assets/Logo.webp" alt="CodeAnt AI" className="h-8" />
          <button onClick={() => setIsOpen(false)}>
            <RxCross2 className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4">
          <select
            value={selectedRepo}
            onChange={(e) => setSelectedRepo(e.target.value)}
            className="w-full p-2 border border-strokeColor rounded-md mb-4"
          >
            <option>UtkarshDhairyaPanwar</option>
          </select>

          <nav className="space-y-1">
            <NavItem icon={<BiHome size={20} />} text="Repositories" active={false} />
            <NavItem icon={<LuCodeXml size={20} />} text="AI Code Review" active={false}/>
            <NavItem icon={<HiOutlineCloud size={20} />} text="Cloud Security" active={false}/>
            <NavItem icon={<LuBookText size={20} />} text="How to Use" active={false}/>
            <NavItem icon={<IoSettingsOutline size={20} />} text="Settings" active={false}/>
            <NavItem icon={<IoCallOutline size={20} />} text="Support" active={false}/>
            <NavItem icon={<LuLogOut size={20} />} text="Logout"active={false}/>
          </nav>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 bg-primaryWhite z-40 border-b border-strokeColor">
        <div className="flex justify-between items-center p-4">
          <img src="/assets/Logo.webp" alt="CodeAnt AI" className="h-8" />
          <button onClick={() => setIsOpen(true)}>
            <MdOutlineMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <MobileMenu />

      <div className="hidden md:flex flex-col justify-between w-1/6 bg-primaryWhite border-r border-strokeColor">
        <div className="p-4">
          <div className="flex items-center mb-6">
            <img src="/assets/Logo.webp" alt="CodeAnt AI" className="h-8" />
          </div>
          
          <select
            value={selectedRepo}
            onChange={(e) => setSelectedRepo(e.target.value)}
            className="w-full p-2 border border-strokeColor rounded-md mb-4"
          >
            <option>UtkarshDhairyaPanwar</option>
          </select>

          <nav className="space-y-1">
            <NavItem icon={<BiHome size={20} />} text="Repositories" active />
            <NavItem icon={<LuCodeXml size={20} />} text="AI Code Review" active={false}/>
            <NavItem icon={<HiOutlineCloud size={20} />} text="Cloud Security" active={false}/>
            <NavItem icon={<LuBookText size={20} />} text="How to Use" active={false}/>
            <NavItem icon={<IoSettingsOutline size={20} />} text="Settings" active={false}/>
            <NavItem icon={<IoCallOutline size={20} />} text="Support" active={false}/>
            <NavItem icon={<LuLogOut size={20} />} text="Logout" active={false}/>
          </nav>
        </div>

        <div className="mt-auto p-4">
          <NavItem icon={<IoCallOutline size={20} />} text="Support" active={false}/>
          <NavItem icon={<LuLogOut size={20} />} text="Logout" active={false}/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;