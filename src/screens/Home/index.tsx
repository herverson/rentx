import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

export default function Home() {
  const carData = {
    brand: "Mercedes",
    name: "C300",
    rent: {
      period: "AO DIA",
      price: 200,
    },
    thumbnail:
      "https://cdn.autopapo.com.br/box/uploads/2019/07/25111304/frente-mercedes-classe-c-cabriolet.png",
  };
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1,2,3,4,5]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}
