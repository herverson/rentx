import React from 'react'
import {
  Container,
  Content,
  Footer,
  Message,
  Title
} from './styles';

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { useWindowDimensions } from 'react-native';
import { ConfirmButton } from '../../components/ConfirmButton';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate("Home");
  }
  
  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora AgoraAgoraAgoraAgora {"\n"}
          AgoraAgoraAgoraAgoraAgora {"\n"}
          AgoraAgoraAgoraAgoraAgor.
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={handleHome} />
      </Footer>
    </Container>
  );
}
