import React from 'react';
import { Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  ContainerImage,
  ContainerText,
  Title,
  Description,
  TrashButton,
} from './styles';

const CardItem: React.FC = () => {
  return (
    <Container>
      <ContainerImage>
        <Feather name="image" size={30} />
      </ContainerImage>

      <ContainerText>
        <Title>NodeJS</Title>
        <Description>Aprender templates e RESTAPI</Description>
      </ContainerText>

      <TrashButton
        onPress={() => {
          Alert.alert('trash');
        }}
      >
        <Feather name="trash-2" size={20} />
      </TrashButton>
    </Container>
  );
};

export default CardItem;
