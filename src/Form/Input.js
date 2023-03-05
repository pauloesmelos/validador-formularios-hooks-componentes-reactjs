import React from 'react';
import InputMask from 'react-input-mask';
const Input = ({label,id,value,onChange,onBlur,erro,getMascara,...props}) => {
  const mascara = getMascara();
  return (
    <>
        <label htmlFor={id}>
            {label}
        </label>
        <input id={id} value={value} onChange={onChange} onBlur={onBlur} erro={erro} style={erro? {border: "1px solid #EB463B"} : {}} mask={mascara} {...props} />
        {erro && <p className='erro'><span className='exclamacao'>!</span>{erro}</p>}
    </>
  )
}

export default Input;