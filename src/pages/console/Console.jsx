import React from 'react'
import SideBar from '../../components/console/SideBar'
import { CgMenuGridO } from "react-icons/cg";
import { Link, Outlet } from 'react-router-dom';
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
const Console = () => {
  const user = 'amar'
  return (
    <div className=' h-screen flex flex-col'>
     
     <div className=' bg-[#140e19] border-b border-gray-200/5 sticky top-0 flex justify-between text-3xl px-5 py-2' >
      <p>axeiro</p>
       <div className='flex justify-center items-center gap-2.5 '>
        <Link className=' text-sm border border-gray-200/10 uppercase px-5 py-2 rounded-2xl bg-[#130e19]' to={`/${user}/newapp`}>Deploy New App</Link>
        <CgMenuGridO className=' font-extrabold'/>
      </div>
     </div>

      <div className=' flex'>
         <SideBar />
       <div className='grow py-7 px-2 transition-all duration-500'>
        <Outlet />
       </div>
      </div>
    </div>
  )
}

export default Console