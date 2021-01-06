import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 25px 0 25px;
  border: 1px solid orange;
  border-radius: 8px;
  background-color: orange;
  height: 90px;
  padding: 15px;
`;

export const ContainerImage = styled.View`
  background-color: ${lighten(0.15, 'orange')};
  width: 55px;
  height: 55px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const ContainerText = styled.View``;

export const Title = styled.Text`
  font-size: 18px;
  color: white;
`;

export const Description = styled.Text`
  color: #eee;
`;

export const TrashButton = styled.TouchableOpacity``;
