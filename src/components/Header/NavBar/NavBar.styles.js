import styled from 'styled-components'
import { pallete, font } from '../../../styles/Shared.styles'

export const NavBarWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavBarBrand = styled.a`
    display: inline-block;
    width: 100%;
    max-width: 150px;
    padding: .3125rem 0;
    margin-right: 1rem;  
`

export const NavLinks = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 900;
    list-style: none;
    text-align: center;

    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: ${pallete.black};
        opacity: ${props => props.open ? 1 : 0};
        transform: ${props => props.open ? 'scale(1)' : 'scale(0)'};
        transition: opacity 650ms;
    }
`

export const NavLink = styled.li`
    margin: 0 30px;

    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
    }

    a {
        display: block;
        position: relative;
        text-transform: capitalize;
        color: ${pallete.white};
        font-family: ${font.segoe};

        &::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -3px;
            background-color: ${pallete.gold};
            width: 100%;
            height: 2px;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 650ms;

            @media (max-width: 768px) {
                display: none;
            }
        }

        &:hover::before {
            transform: scaleX(2);
        }
    }    
`