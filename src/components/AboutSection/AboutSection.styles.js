import styled from 'styled-components'
import { pallete, font, buttonShared, flex50, flex100 } from '../../styles/Shared.styles'

export const About = styled.section`
`

export const Left = styled.div`
    ${flex50}
    padding: 0 15px;
    text-align: left;

    @media (max-width: 768px) {
        ${flex100}
        text-align: center;
        margin-bottom: 1.5rem;
    }
    
    p {
        line-height: 1.5rem;
        font-weight: 400;
        font-size: 1rem;
        font-family: ${font.segoe};
    }
`

export const Heading = styled.div`
    margin-bottom: 1rem;
`

export const Button = styled.a`
    ${buttonShared}
    color: ${pallete.gold};
    transition: background-color 650ms;
    margin-top: 1.5rem;
    background-color: transparent;

    &:hover {
        color: ${pallete.white} !important;
        background-color: ${pallete.gold};
    }
`

export const Right = styled.div`
    ${flex50}

    @media (max-width: 768px) {
        ${flex100}
    }
`