import styled, { css, keyframes } from 'styled-components'
import { pallete } from './Shared.styles'
import { RiRoadMapFill } from 'react-icons/ri'
import { ImClock } from 'react-icons/im'
import { GoDeviceMobile } from 'react-icons/go'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const iconStyles = css`
    font-size: 50px;
    color: ${pallete.gold};
    font-weight: 400; 
`

const hamburgerMenuStyles = css`
    font-size: 30px;
    color: rgba(198, 153, 99, .7);
    margin: auto;
    font-weight: 900;
    animation: ${fadeIn} 1s linear forwards;
`

export const LocationIcon = styled(RiRoadMapFill)`
    ${iconStyles};
`

export const ClockIcon = styled(ImClock)`
    ${iconStyles};
`

export const PhoneIcon = styled(GoDeviceMobile)`
    ${iconStyles};
`

export const HamburgerIcon = styled(GiHamburgerMenu)`
    ${hamburgerMenuStyles};
`

export const CrossIcon = styled(ImCross)`
    ${hamburgerMenuStyles};
`