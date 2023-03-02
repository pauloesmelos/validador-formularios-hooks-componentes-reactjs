import React from 'react';

const Button = ({content,...props}) => {
  return (
    <button style={{display: "block"}} {...props}>{content}</button>
  )
}

export default Button;