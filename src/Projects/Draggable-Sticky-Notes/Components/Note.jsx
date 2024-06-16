import React from 'react'

const Note = ({context,initialPos,...props}) => {
  return (
    <div
    style={{
      position:'absolute',
      left:`${initialPos?.x}px`,
      top:`${initialPos?.y}px`,
      border:"1px solid black",
      userSelect:'none',//user cant select the text
      padding:"10px",
      width:'200px',
      cursor:'move',//changes the cursor style
      backgroundColor:'lightyellow'
    }}
    {...props}
    >
      {context}
    </div>
  )
}

export default Note
