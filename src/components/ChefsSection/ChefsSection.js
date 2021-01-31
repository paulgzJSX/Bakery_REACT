import { CardBody, ChefCard, ChefsWrapper, SectionHeading } from './ChefsSection.styles'
import { Container, Row, Image, OldStyleHeader, Title } from '../../styles/SharedComponents.styles'
import { chefItems } from './ChefsData'

const ChefsSection = () => {
  return (
    <ChefsWrapper>
      <Container>
        <SectionHeading>
          <Title>Meet</Title>
          <OldStyleHeader>Our chefs</OldStyleHeader>
        </SectionHeading>
        <Row>
          {chefItems.map((item, idx) =>
            <ChefCard
              key={item.h1}
              data-aos={idx === 0
                ? 'fade-right'
                : idx === 1
                  ? 'fade-up'
                  : 'fade-left'}
            >
              <Image src={item.image} alt={item.h1} />
              <CardBody>
                <h1>{item.h1}</h1>
                <h6>{item.h6}</h6>
                <p>{item.p}</p>
              </CardBody>
            </ChefCard>)}
        </Row>
      </Container>
    </ChefsWrapper>
  )
}

export default ChefsSection
