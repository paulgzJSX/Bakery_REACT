import styled, { css } from 'styled-components'
import { pallete, font, buttonShared } from '../../styles/Shared.styles'
import HeaderImg from '../../images/header-bg.jpg'

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(16,29,44,.95), rgba(16,29,44,.95)),
                url(${HeaderImg});
    background-size: cover;
    position: relative;
`

export const HamburgerMenu = styled.div`
    position: fixed;
    width: 50px;
    height: 50px;
    display: flex;
    background-color: ${pallete.black};
    border-radius: 4px;
    cursor: pointer;
    z-index: 999;
    display: none;

    @media (max-width: 768px) {
        display: grid;
        place-items: center;
        top: 35px;
        right: 25px;
    }
`

export const HeroText = styled.div`
    position: absolute;
    width: 100%;
    top: 45%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -45%);

    p {
        font-family: ${font.segoe};
        font-size: 1.25rem;
        font-weight: 300;
        margin-bottom: 1.5rem;
        color: ${pallete.white};
    }
`

export const Button = styled.a`
    ${buttonShared}
    color: ${pallete.white};
    background-color: transparent;
    transition: 
        color .15s ease-in-out,
        background-color .15s ease-in-out,
        border-color .15s ease-in-out,
        box-shadow .15s ease-in-out;
    ${props => props.ml && css`
        margin-left: .5rem;
    `}
    ${props => props.mr && css`
        margin-right: .5rem;
    `}
`
