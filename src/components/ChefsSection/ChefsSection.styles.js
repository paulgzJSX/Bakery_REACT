import styled from 'styled-components'
import { font, h1Shared, h6Shared, flex33, flex100 } from '../../styles/Shared.styles'

export const ChefsWrapper = styled.section`
`

export const SectionHeading = styled.div`
    text-align: center;
    margin: 3rem 0;
`

export const ChefCard = styled.div`
    padding: 0 15px;
    ${flex33};

    @media (max-width: 768px) {
        ${flex100};
    }
`

export const CardBody = styled.div`
    flex: 1 1 auto;
    padding: 1.25rem;
    text-align: center;
    
    h1 {
        ${h1Shared};
        font-size: 25px;
    }

    h6 {
        ${h6Shared};
        font-size: 16px;
    }

    p {
        font-family: ${font.segoe};
    }
`