import Logo from '../../../images/logo.png'
import { NavBarBrand, NavBarWrapper, NavLinks, NavLink } from './NavBar.styles'
import { Image } from '../../../styles/SharedComponents.styles'

const navLinks = ['home', 'about', 'menu', 'chefs']

const NavBar = ({ displayMobile }) => {
    return (
        <NavBarWrapper>
            <NavBarBrand href="index.html">
                <Image src={Logo} alt="logo" />
            </NavBarBrand>
            <NavLinks open={displayMobile}>
                {navLinks.map(link =>
                    <NavLink key={link}>
                        <a href={`#${link}`}>{link}</a>
                    </NavLink>)}
            </NavLinks>
        </NavBarWrapper>
    )
}

export default NavBar
