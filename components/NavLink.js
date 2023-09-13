import React from 'react'
import Image from "next/image";
import Link from "next/link";

function NavLink({source, alt, linkName, width = 25, height = 25}) {
  return (
    <div className='flex items-center'>
        <Image
          src={source}
          alt={alt}
          width={width}
          height={height}
          className='py-2 mr-2'
        />
        <Link href="/" className="text-lg text-[#666666]">
          {linkName}
        </Link>
    </div>
  )
}

export default NavLink
