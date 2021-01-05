import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Container } from './styles';

const ButtonAdd: React.FC<TouchableOpacityProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Icon name="plus" size={32} color="#000" />
    </Container>
  );
};

export default ButtonAdd;
