import styled from 'styled-components'
import { pallete, buttonShared, font, h1Shared, h6Shared, flex16, flex50, flex100 } from '../../../styles/Shared.styles'

export const RowRich = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
`

export const CardImage = styled.div`
    ${flex16};
    order: ${props => props.order};
    width: 100%;

    @media (max-width: 1200px) {
        ${flex50};
        order: ${props =>
            props.row === '1'
                ? props.idx === 1
                    ? 1
                    : props.idx === 2
                        ? 4
                        : 5
                : props.row === '2'
                    ? props.idx === 1
                        ? 2
                        : props.idx === 2
                            ? 3
                            : 6
                    : null}
    }

    @media (max-width: 576px) {
        ${flex100}
        order: 1;
    }
`

export const CardContent = styled.div`
    ${flex16};
    order: ${props => props.order};
    position: relative;
    background-color: ${pallete.white};
    padding: 3rem 2rem;
    display: grid;
    place-items: center;

    @media (max-width: 1200px) {
        ${flex50};
        order: ${props =>
            props.row === '1'
                ? props.idx === 1
                    ? 2
                    : props.idx === 2
                        ? 3
                        : 6 
                : props.row === '2'
                    ? props.idx === 1
                        ? 1
                        : props.idx === 2
                            ? 4
                            : 5 
                    : null}
    }

    @media (max-width: 576px) {
        ${flex100};
        order: 1;
    }

    &::before {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        background-color: inherit;
        z-index: 1;
        display: block;
        top: 50%;
        transform: translate(0, -50%) rotate(45deg);
        left: -12px;
    }
`

export const MenuItemDescription = styled.div`
    color: ${pallete.deepBlue};

    h6 {
        ${h6Shared};
        font-size: 2rem;
    }

    h1 {
        ${h1Shared};
        /* margin-bottom: .5rem;
        color: ${pallete.black}; */
        font-size: 30px;
        /* letter-spacing: 1px;
        font-weight: 300; */
    }

    p {
        display: none;

        @media (max-width: 1200px) {
            display: block;
            font-family: ${font.segoe};
        }
    }
`

export const Button = styled.a`
    ${buttonShared}
    margin-top: 1rem;
    color: ${pallete.white} !important;
    background-color: ${pallete.gold};
    transition: 
        color .15s ease-in-out,
        background-color .15s ease-in-out,
        border-color .15s ease-in-out,
        box-shadow .15s ease-in-out;

    @media (max-width: 1200px) {
        display: none;
    }
`