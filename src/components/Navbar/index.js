import React from 'react'
import '../../styles/Navbar.css'
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements'

const Navbar = ({toggle}) => {
  return ( 
    <>
    <Nav>
        <NavLink to="/Home">
            <div id='logo-small'>RD</div>
            <div id="logo-wide">Remy Duijn</div>
        </NavLink>  
        <Bars onClick={toggle} />
        <NavMenu>
            <NavLink to="/about" activestyle>
              About
            </NavLink>
            <NavLink to="/portfolio" activestyle>
              Portfolio
            </NavLink>
            <NavLink to="/contact" activestyle>
              Contact
            </NavLink>
        </NavMenu>
    </Nav> 

    {/* <Nav>
        <NavbarContainer>
            <NavLogo to="/Home">Remy Duijn</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
            <NavItem>
              <NavLinks to='/about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/portfolio'>Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/contact'>Contact</NavLinks>
            </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav> */}
    </>
  )
}

export default Navbar


     