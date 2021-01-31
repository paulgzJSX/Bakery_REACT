import AboutImg from '../../images/about-img.jpg'
import { About, Heading, Left, Button, Right } from './AboutSection.styles'
import { Container, Row, Image, OldStyleHeader, Title } from '../../styles/SharedComponents.styles'

const AboutSection = () => {
    return (
        <About>
          <Container>
            <Row>
              <Left data-aos={'fade-right'}>
                <Heading>
                  <Title mb='.5rem'>Discover</Title>
                  <OldStyleHeader mb='.5rem'>Our Story</OldStyleHeader>
                </Heading>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, rem nobis! Rem ab adipisci deserunt enim repudiandae nam, fugit reiciendis assumenda nulla repellat temporibus illum quo reprehenderit quod dicta dignissimos hic natus sequi tempora. Neque ea laudantium aperiam esse id accusantium eum iure aliquid doloribus ullam? Saepe, unde ullam. Unde natus, quia architecto libero, earum, qui quaerat atque ipsum neque beatae quam corporis? Cumque quia minima dolor. Fuga, ipsum aperiam?</p>
                <Button>Find out more</Button>
              </Left>
              <Right data-aos={'fade-left'}>
                <Image src={AboutImg} alt="" />
              </Right>
            </Row>
          </Container>
        </About>
    )
}

export default AboutSection
