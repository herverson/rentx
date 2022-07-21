import React from 'react'
import { BackButton } from '../../components/BackButton';
import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  Price,
  RentalPeriod,
  Description,
  CarImages,
  Details,
  Name,
  Brand,
  Rent,
  CalendarIcon,
  Period,
  Accessories,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

import { Feather } from '@expo/vector-icons';
import speedSvg from "../../assets/speed.svg";

import { Accessory } from "../../components/Acessory";

import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ImageSlider } from '../../components/ImageSlider';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetails() {
  const theme = useTheme();
   const navigation = useNavigation();

   function handleSchedulingComplete() {
     navigation.navigate("SchedulingComplete");
   }
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="tranparent"
        />

        <BackButton onPress={() => {}} color={theme.colors.shape} />
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
            <Name>name</Name>
          </Description>

          <Rent>
            <Period>period</Period>
            <Price>R$ price</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="300km/h" icon={speedSvg} />
          <Accessory name="300km/h" icon={speedSvg} />
          <Accessory name="300km/h" icon={speedSvg} />
          <Accessory name="300km/h" icon={speedSvg} />
          <Accessory name="300km/h" icon={speedSvg} />
          <Accessory name="300km/h" icon={speedSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>aa</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>aaaa</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>diaria</RentalPriceQuota>
            <RentalPriceTotal>R$ 500</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title="Alugar agora" color={theme.colors.success} onPress={handleSchedulingComplete} />
      </Footer>
    </Container>
  );
}
