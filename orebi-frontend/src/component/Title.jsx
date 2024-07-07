import React from 'react'

const Title = ({heading,className}) => {
  return (
    <h2 className={`text-[39px] font-bold text-black ${className}`}>{heading}</h2>
  )
}

export default Title