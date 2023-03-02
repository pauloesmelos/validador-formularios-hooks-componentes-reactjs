import React from 'react';

const Input = ({label,id,value,onChange,onBlur,erro,...props}) => {
  return (
    <>
        <label htmlFor={id}>
            {label}
        </label>
        <input id={id} value={value} onChange={onChange} onBlur={onBlur} erro={erro} style={erro? {border: "1px solid #EB463B"} : {}} {...props} />
        <p className='erro'>{erro}</p>
    </>
  )
}

export default Input;