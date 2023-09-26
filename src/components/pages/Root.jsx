import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLinks } from './NavLinks'

export const Root = () => {
  return (
    <>
    <NavLinks/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}
