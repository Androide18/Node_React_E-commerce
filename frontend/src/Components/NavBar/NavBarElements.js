import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
`
export const NavLink = styled(Link)`
    background: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
`

export const NavMenu = styled.div`
    background: yellow;
`

export const NavBtn = styled.nav`
    background: blue;
`

export const NavBtnLink = styled(Link)`
    background: green;
    text-decoration: none;
`