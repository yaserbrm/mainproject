import React from 'react'

function WeblogContent({ children,classes }) {
  return (
    <main className={`${classes}`} >
    { children }
    </main>
  )
}

export default WeblogContent