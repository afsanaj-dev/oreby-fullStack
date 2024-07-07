import React from 'react'
import Section from './Section'
import Images from './Images'
import Container from './Container'
import Flex from './Flex'

const Offer = () => {
  return (
    <Section className="my-16">
        <Container>
            <Flex className="justify-between md:gap-5">
                <Images src="images/Ad1.png"/>
                <Flex className="flex-col gap-2 md:gap-5">
                <Images src="images/Ad2.png"/>
                <Images src="images/Ad3.png"/>
                </Flex>
            </Flex>
        </Container>
    </Section>
  )
}
export default Offer;