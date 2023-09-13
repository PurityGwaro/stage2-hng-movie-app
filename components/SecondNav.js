import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import Link from "next/link";

function SecondNav() {
  return (
    <nav className='flex flex-col items-center w-1/4 pt-10 pb-4 border-2 rounded-tr-2xl rounded-br-2xl'>
        <div className='flex items-center'>

     <Image
          src="/tv.svg"
          alt="tv logo"
          width={40}
          height={40}
          className="py-2 mr-2"
        />
        <Link href='/' className="text-xl font-bold ">MovieBox</Link>
        </div>

      <ul className='my-4'>
        <li>
          <NavLink source="/Home.svg" alt="home logo" linkName="Home" />
        </li>
        <li>
          <NavLink
            source="/Movie-Projector.svg"
            alt="movie logo"
            linkName="Movies"
          />
        </li>
        <li>
          <NavLink source="/TV-Show.svg" alt="tv logo" linkName="TV Series" />
        </li>
        <li>
          <NavLink
            source="/Calendar.svg"
            alt="upcoming logo"
            linkName="Upcoming"
          />
        </li>
      </ul>
      <div className="border border-[#BE123C] py-6 text-sm mx-4 rounded-xl mb-2 px-4">
        <p className='mb-3 text-[#333333]'>Play movie quizes and earn free tickets</p>
        <p className="text-[#666666]">50k people are playing now</p>
        <button className='bg-[#f0c8d2] text-[#BE123C] p-2 px-3 rounded-xl text-sm mt-4'>Start Playing</button>
      </div>
      
        <NavLink
            source="/Logout.svg"
            alt="logout logo"
            linkName="Log Out"
          />
        
      
    </nav>
  );
}

export default SecondNav;
