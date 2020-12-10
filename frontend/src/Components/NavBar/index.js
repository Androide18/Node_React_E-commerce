import React from 'react'
 import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavBarElements'

function NavBar() {
    return (
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">
                        Login
                    </NavBtnLink>
                </NavBtn>
                <NavLink to="/register">
                    Register
                </NavLink>
                <NavLink to="/products">
                    Products
                </NavLink>
                <NavLink to="/cart">
                    Cart
                </NavLink>
            </NavMenu>
        </Nav>
    )
}

export default NavBar

