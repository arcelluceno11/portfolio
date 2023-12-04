import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { MdLightMode } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = ({ handleDrawer }) => {
  return (
    <>
      <nav className='flex justify-between'>
        <ul className='flex items-center'>
          <li>
            <a
              href='https://github.com/arcelluceno11'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillGithub className='text-2xl cursor-pointer' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/arcelluceno11'
              target='_blank'
              rel='noreferrer'
              className='text-xl mx-2 cursor-pointer'
            >
              arcelluceno101
            </a>
          </li>
        </ul>
        <ul className='flex items-center gap-5'>
          <li>
            <MdLightMode
              className='text-dark cursor-pointer text-3xl'
              onClick={() => console.log('light')}
            />
          </li>
          <li>
            <GiHamburgerMenu
              className='text-dark cursor-pointer text-3xl'
              onClick={() => handleDrawer(true)}
            />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
