import React from 'react'

const Link = ({content,...props}) => {
  return (
    <li>
        <a style={{padding: "1.05rem",fontWeight: "bolder"}} target="_blank" {...props}>{content}</a>
    </li>
  )
}

export default Link;