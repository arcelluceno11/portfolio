import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import {
  GrProjects,
  GrCircleInformation,
  GrHome,
  GrTechnology,
  GrContactInfo,
} from 'react-icons/gr'
import Tilt from '../../../shapes/Tilt'

const MenuDrawerItems = ({ toggleDrawer }) => {
  const NAV_BAR_ITEMS = [
    {
      name: 'Home',
      icon: <GrHome />,
    },
    {
      name: 'Technology Stack',
      icon: <GrTechnology />,
    },
    {
      name: 'Projects',
      icon: <GrProjects />,
    },
    {
      name: 'About Me',
      icon: <GrCircleInformation />,
      isBottom: true,
    },
    {
      name: 'Contact',
      icon: <GrContactInfo />,
    },
  ]

  return (
    <>
      <Tilt />
      <Box
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
        className='h-screen flex flex-col justify-between p-3'
      >
        <List>
          {NAV_BAR_ITEMS.map(({ name, icon, isBottom }) => {
            return (
              !isBottom && (
                <>
                  <ListItem key={name} disablePadding>
                    <ListItemButton>
                      <ListItemIcon className='text-xl'>{icon}</ListItemIcon>
                      <ListItemText primary={name} />
                    </ListItemButton>
                  </ListItem>
                </>
              )
            )
          })}
        </List>
        <List>
          {NAV_BAR_ITEMS.map(({ name, icon, isBottom }) => {
            return (
              isBottom && (
                <>
                  <ListItem key={name} disablePadding>
                    <ListItemButton>
                      <ListItemIcon className='text-xl'>{icon}</ListItemIcon>
                      <ListItemText primary={name} />
                    </ListItemButton>
                  </ListItem>
                </>
              )
            )
          })}
        </List>
      </Box>
    </>
  )
}

export default MenuDrawerItems
