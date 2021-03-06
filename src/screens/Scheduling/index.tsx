import React from 'react'
import { BackButton } from '../../components/BackButton';
import { Container, Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, Title } from './styles';

import ArrowSvg from '../../assets/arrow.svg';

import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from '../../components/Calendar';

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleSchedulingDetails() {
    navigation.navigate("SchedulingDetails");
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

        <Title>
          Escolha uma {"\n"}
          data de inicio e {"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false}>07/07/2022</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>07/07/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleSchedulingDetails} />
      </Footer>
    </Container>
  );
}
