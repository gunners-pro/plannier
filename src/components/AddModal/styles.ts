import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 12px;
`;

export const ContainerTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerTopTitle = styled.Text`
  font-size: 22px;
`;

export const ContainerData = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
`;

export const FormData = styled.View`
  width: 100%;
  padding: 20px;
  margin-bottom: 25px;
`;

export const InputTitle = styled.TextInput`
  height: 35px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 15px;
  padding: 5px;
  margin-bottom: 25px;
`;

export const InputDescricao = styled.TextInput`
  height: 100px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 15px;
  padding: 5px;
`;

export const ButtonFormData = styled.TouchableOpacity`
  width: 90%;
  height: 55px;
  justify-content: center;
  align-items: center;
  background-color: #ff5722;
  border-radius: 8px;
  padding: 5px;
`;

export const ButtonFormDataText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
