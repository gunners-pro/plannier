import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo, Title, Button, ButtonText, Banner } from './styles';

import logo from '../../assets/logo.png';
import banner from '../../assets/banner.jpg';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Logo source={logo} />
      <Title>Planeje seus estudos durante a semana</Title>
      <Button onPress={() => navigate('Dashboard')}>
        <ButtonText>Vamos lá!</ButtonText>
      </Button>
      <Banner source={banner} />
    </Container>
  );
};

export default Home;
