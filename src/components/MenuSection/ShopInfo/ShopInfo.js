import { Line, ShopInfoItem, ShopInfoWrapper } from './ShopInfo.styles'
import { Container, Row } from '../../../styles/SharedComponents.styles'
import { shopInfoItems } from './ShopInfoData'

const ShopInfo = () => {
    return (
        <Container>
            <Row>
                {shopInfoItems.map((item, idx) =>
                    <ShopInfoWrapper
                        key={item.h1}
                        data-aos={idx === 0
                            ? 'fade-up'
                            : idx === 1
                                ? 'fade-down'
                                : 'fade-right'}
                    >
                        <ShopInfoItem>
                            {item.icon}
                            <h1>{item.h1}</h1>
                            <p>{item.p1}</p>
                            <p>{item.p2}</p>
                        </ShopInfoItem>
                    </ShopInfoWrapper>)}
            </Row>
            <Line />
        </Container>
    )
}

export default ShopInfo
