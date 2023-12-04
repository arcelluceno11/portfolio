import { SwipeableDrawer } from '@mui/material'
import React from 'react'
import MenuDrawerItems from './MenuDrawerItems'

const MenuDrawer = ({ isOpen, handleDrawerOpen }) => {
  const toggleDrawer = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    handleDrawerOpen(false)
  }
  return (
    <>
      <SwipeableDrawer
        anchor='right'
        open={isOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <MenuDrawerItems toggleDrawer={toggleDrawer} />
      </SwipeableDrawer>
    </>
  )
}

export default MenuDrawer
