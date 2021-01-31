import styled from 'styled-components'
import { font, pallete, flex33, flex100 } from '../../../styles/Shared.styles'

export const ShopInfoWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 0 15px;
    ${flex33};

    @media (max-width: 768px) {
        ${flex100};
        margin-bottom: 1.5rem;
    }
`

export const ShopInfoItem = styled.div`
    text-align: center;
    color: ${pallete.white};

    h1 {
        font-size: 25px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
    }

    p {
        color: rgba(255, 255, 255, .5);
        line-height: 1.5;
        font-family: ${font.segoe}
    }
`

export const Line = styled.hr`
    margin: 3rem 0 1rem;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, .05);
`