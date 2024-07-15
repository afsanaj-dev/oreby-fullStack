import React from 'react'

const Input = ({className,placeholder,onChange}) => {
  return (
    <input onChange={onChange} className={className} placeholder={placeholder} type="text" />
  )
}

export default Input