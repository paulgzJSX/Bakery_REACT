import { Fragment } from 'react'
import { CardImage, RowRich, CardContent, MenuItemDescription, Button } from './MenuRow.styles'
import { Image } from '../../../styles/SharedComponents.styles'

const MenuRow = ({ rowItems, row, imageFirst }) => {
    return (
        <RowRich>
            {rowItems.map((item, idx) =>
                <Fragment key={idx}>
                    <CardImage
                        row={row}
                        idx={idx + 1}
                        order={imageFirst ? item.order : item.order + 1}
                        data-aos={'flip-left'}
                    >
                        <Image src={item.image} alt="" />
                    </CardImage>
                    <CardContent
                        row={row}
                        idx={idx}
                        order={imageFirst ? item.order + 1 : item.order}
                        data-aos={'zoom-in'}
                    >
                        <MenuItemDescription>
                            <h6>{item.price}</h6>
                            <h1>{item.item}</h1>
                            <p>{item.description}</p>
                            <Button>Learn more</Button>
                        </MenuItemDescription>
                    </CardContent>
                </Fragment>)}
        </RowRich>
    )
}

export default MenuRow
