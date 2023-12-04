import React from 'react'
import NavBar from './NavBar'
import MenuDrawer from '../../shared/components/MenuDrawer'

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  return (
    <>
      <header className='fixed w-screen pt-6 px-6'>
        <NavBar handleDrawer={setIsDrawerOpen} />
        <MenuDrawer isOpen={isDrawerOpen} handleDrawerOpen={setIsDrawerOpen} />
      </header>
    </>
  )
}

export default Header
