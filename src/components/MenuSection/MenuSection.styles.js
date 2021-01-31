import styled from 'styled-components'
import { pallete } from '../../styles/Shared.styles'

export const Menu = styled.section`
    background-color: ${pallete.black};
`

export const ContainerFluid = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0;
`

export const Heading = styled.div`
    text-align: center;
    margin: 3rem auto;

    h4 {
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 0;
        letter-spacing: 1px;
        color: ${pallete.white};
        margin-bottom: .5rem;
    }
`