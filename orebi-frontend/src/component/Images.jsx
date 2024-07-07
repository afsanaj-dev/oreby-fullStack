import React from 'react'

const Images = ({src,alt,className}) => {
  return (
    <div>
        <img className={className} src={src} alt={alt} />
    </div>
  )
}

export default Images