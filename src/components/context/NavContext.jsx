import React, { createContext, useContext, useState } from 'react'
export const NavbarContext = createContext();

const NavContext = ({children}) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        {children}
      </NavbarContext.Provider>  
    </>
  )
}

export default NavContext