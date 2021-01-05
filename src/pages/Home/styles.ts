import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const Logo = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Title = styled.Text`
  font-size: 38px;
  color: #5d80ff;
  text-align: center;
  margin: 15px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #ff5722;
  width: 45%;
  height: 55px;
  border-radius: 10px;
  margin: 40px;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Banner = styled.Image`
  width: ${Dimensions.get('screen').width}px;
  height: 350px;
`;
