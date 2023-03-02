import React from 'react';

const Logo = ({content,...props}) => {
  return (
    <h3 style={{position: "absolute",color: "#fff",cursor:"pointer",fontWeight:"bolder",fontFamily:"monospace",marginLeft: '3rem'}} {...props}>{content}</h3>
  )
}
export default Logo;