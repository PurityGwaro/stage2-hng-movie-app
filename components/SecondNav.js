import React from 'react'
import Image from 'next/image'

function SecondNav() {
  return (
    <nav>
      <Image
          src="/youtube.svg"
          alt="jsbits logo"
          width={20}
          height={20}
          className=""
        />
        <span></span>
    </nav>
  )
}

export default SecondNav
