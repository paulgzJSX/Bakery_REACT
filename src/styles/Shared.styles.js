import { css } from 'styled-components'

export const pallete = {
    gold: '#c69963',
    white: '#fff',
    black: '#101D2C',
    deepBlue: '#212529'
}

export const font = {
    segoe: `'Segoe UI', sans-serif`,
    niccone: `'Niconne', cursive`,
    teko: `'Teko', sans-serif`
}

export const buttonShared = css`
    position: relative;
    display: inline-block;
    width: 150px;
    padding: 5px 0;
    border: 1px solid ${pallete.gold};
    border-radius: .25rem;
    font-family: ${font.segoe};
    line-height: 1.5;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    overflow: hidden;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: all 650ms;
    }

    &:hover::before {
        left: 100%;
    }
`

export const h1Shared = css`
    font-weight: 300;
    letter-spacing: 1px;
    margin-bottom: .5rem;
    color: ${pallete.black};
`

export const h6Shared = css`
    font-weight: 500;
    line-height: 1.2;
    color: ${pallete.gold};
    font-family: ${font.segoe};
    margin-bottom: .5rem;
`

export const flex16 = css`
    flex: 0 0 16.666667%;
    max-width: 16.666667%;    
`

export const flex33 = css`
    flex: 0 0 33.333333%;
    max-width: 33.333333%;    
`

export const flex50 = css`
    flex: 0 0 50%;
    max-width: 50%;
`

export const flex100 = css`
    flex: 0 0 100%;
    max-width: 100%;
`