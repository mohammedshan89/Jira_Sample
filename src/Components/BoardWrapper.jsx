import React from 'react'

const BoardWrapper = ({children}) => {
  return (
    <div id="taskBoard">
      {children}
    </div>
  )
}

export default BoardWrapper
