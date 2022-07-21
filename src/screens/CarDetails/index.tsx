import React from 'react'
import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider'

import speedSvg from '../../assets/speed.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Footer,
  Acessories,
} from "./styles";
import { Accessory } from '../../components/Acessory';
import { useNavigation } from '@react-navigation/native';

export function CarDetails() {
  const navigation = useNavigation();

  function handleConfirmDetails() {
    navigation.navigate('Scheduling');
  }

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

      <Content>
        <Details>
          <Description>
            <Brand>Mercedes</Brand>
            <Name>C</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 300</Price>
          </Rent>
        </Details>

        <Acessories>
          <Accessory name="300km/h" icon={speedSvg} />
          <Accessory name="300km/h" icon={speedSvg} />
          <Accessory name="300km/h" icon={speedSvg} />
          <Accessory name="300km/h" icon={speedSvg} />
          <Accessory name="300km/h" icon={speedSvg} />
          <Accessory name="300km/h" icon={speedSvg} />
        </Acessories>

        <About>
          A expressão Lorem ipsum em design gráfico e editoração é um texto
          padrão em latim utilizado na produção gráfica para preencher os
          espaços de texto em publicações para testar e ajustar aspectos visuais
          antes de utilizar conteúdo real.
        </About>
      </Content>

      <Footer>
        <Button
          title="Escolher período de aluguel"
          onPress={handleConfirmDetails}
        />
      </Footer>
    </Container>
  );
}
