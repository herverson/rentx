import React from 'react'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Container, Header, CarImages } from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://cdn.autopapo.com.br/box/uploads/2019/07/25111304/frente-mercedes-classe-c-cabriolet.png",
          ]}
        />
      </CarImages>
    </Container>
  );
}
