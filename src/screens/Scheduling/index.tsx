import React, { useState } from 'react'
import { BackButton } from '../../components/BackButton';
import { Container, Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, Title } from './styles';

import ArrowSvg from '../../assets/arrow.svg';

import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Calendar, DayProps, MarkedDateProps } from '../../components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { CarDTO } from '../../dtos/CarDTO';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format } from 'date-fns';

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

export function Scheduling() {
  const [lastSelectedDate, setlastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setmarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const theme = useTheme();
  const navigation = useNavigation();

  const route = useRoute();
  const { car } = route.params as Params;

  function handleSchedulingDetails() {
    navigation.navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDates)
    });
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setlastSelectedDate(end);
    const interval = generateInterval(start, end);
    setmarkedDates(interval);

     const firstDate = Object.keys(interval)[0];
     const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

     setRentalPeriod({
       startFormatted: format(
         getPlatformDate(new Date(firstDate)),
         "dd/MM/yyyy"
       ),
       endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
     });
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="tranparent"
        />

        <BackButton onPress={handleBack} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}
          data de inicio e {"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          onPress={handleSchedulingDetails}
        />
      </Footer>
    </Container>
  );
}
