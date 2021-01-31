import { ContainerFluid, Heading, Menu } from './MenuSection.styles'
import { OldStyleHeader } from '../../styles/SharedComponents.styles'
import MenuRow from './MenuRow/MenuRow'
import ShopInfo from './ShopInfo/ShopInfo'
import { rowItems1, rowItems2 } from './MenuRow/MenuRowData'

const MenuSection = () => {
    return (
        <Menu>
          <ShopInfo />
          <ContainerFluid>
            <Heading>
              <h4>Our Tasty Food</h4>
              <OldStyleHeader>The Menu</OldStyleHeader>
            </Heading>
            <MenuRow rowItems={rowItems1} row='1' imageFirst />
            <MenuRow rowItems={rowItems2} row='2' />
          </ContainerFluid>
        </Menu>
    )
}

export default MenuSection
 