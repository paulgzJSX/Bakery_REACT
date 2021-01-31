import styled from 'styled-components'
import { font, pallete } from './Shared.styles'

export const Container = styled.div`
    padding: 0 15px;
    margin: 0 auto;
    max-width: 1140px; 

    @media (max-width: 1200px) {
        max-width: 960px;
    }

    @media (max-width: 992px) {
        max-width: 820px;
    }

    @media (max-width: 768px) {
        max-width: 720px;
    }  

    @media (max-width: 576px) {
        max-width: 540px;
    }     
`

export const Row = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;  
    align-items: center;  
`

export const Image = styled.img`
    vertical-align: middle;
    max-width: 100%;
    height: auto;    
`

export const OldStyleHeader = styled.h1`
    font-size: 3.5rem;
    font-family: ${font.niccone};
    color: ${pallete.gold};
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: ${props => props.mb};
`

export const Title = styled.h4`
    font-size: 1.5rem;
    text-transform: uppercase;   
    font-weight: 300;
    letter-spacing: 1px; 
    margin-bottom: ${props => props.mb}
`