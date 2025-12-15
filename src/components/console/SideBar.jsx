import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbLogs } from "react-icons/tb";
import { RiSettingsLine } from "react-icons/ri";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
const SideBar = () => {
  const { user } = useParams();
  const [isOpen , setIsOpen] = useState(false)

  const sidebarItems = [
    { name: 'dashboard', label: 'Dashboard', icon: <MdDashboard /> },
    { name: 'projects', label: 'Projects', icon: <GoProjectSymlink /> },
    { name: 'deployments', label: 'Deployments', icon: <AiOutlineDeploymentUnit /> },
    { name: 'UsageAndBilling', label: 'Usage & Billing', icon: <IoShieldCheckmarkOutline /> },
    { name: 'logs', label: 'Logs', icon: <TbLogs /> },
    { name: 'settings', label: 'Settings', icon: <RiSettingsLine /> }
  ];

  return (
    <div className={`flex flex-col gap-4 pt-7 pl-1 overflow-hidden ${isOpen ? ' transition-all duration-500 w-[3%]' : ' transition-all duration-500 w-[13%]'}`}>
      <TbLayoutSidebarLeftCollapse className=' cursor-e-resize' onClick={()=>{setIsOpen(!isOpen)}}/>
      {sidebarItems.map((item) => (
        <NavLink
          key={item.name}
          to={`/${user}/${item.name}`}
          className={({ isActive }) =>
            `flex  text-nowrap items-center gap-2 px-2 py-2 rounded-xl 
            ${
              isActive && !isOpen
                ? 'bg-[#130e19]  text-white border border-gray-200/5'
                : 'text-gray-400 hover:text-white hover:bg-[#130e19]'
            }`
          }
        >
          <span className="text-xl">{item.icon}</span>
          <span>{!isOpen && item.label}</span>
        </NavLink>
      ))}
      <p className='absolute text-gray-500 bottom-2 px-2'>v1</p>
    </div>
  );
};

export default SideBar;
