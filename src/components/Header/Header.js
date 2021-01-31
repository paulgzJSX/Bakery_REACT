import { useState } from 'react'
import NavBar from './NavBar/NavBar'
import { HeaderWrapper, HeroText, Button, HamburgerMenu } from './Header.styles'
import { Container, OldStyleHeader } from '../../styles/SharedComponents.styles'
import { HamburgerIcon, CrossIcon } from '../../styles/Icons.styles'

const Header = () => {
    const [displayMobile, setDisplayMobile] = useState(false)

    return (
        <HeaderWrapper>
            <Container>
                <HamburgerMenu onClick={() => setDisplayMobile(!displayMobile)}>
                    {!displayMobile
                        ? <HamburgerIcon />
                        : <CrossIcon />}
                </HamburgerMenu>
                <NavBar displayMobile={displayMobile} />
                <HeroText>
                    <OldStyleHeader mb='.5rem'>Welcome</OldStyleHeader>
                    <p>Baked goods like you've never seen before!</p>
                    <Button mr>Explore</Button>
                    <Button ml>Find a store</Button>
                </HeroText>
            </Container>
        </HeaderWrapper>
    )
}

export default Header
