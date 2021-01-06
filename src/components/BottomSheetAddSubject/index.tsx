import React, { useContext, useState } from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import uuid from 'uuid-random';
import { BottomSheet } from 'react-native-elements';

import { DashboardContext } from '../../context/dashboardContext';

import banner from '../../assets/banner-add-modal.jpg';

import {
  Container,
  Banner,
  ContainerTop,
  ContainerTopTitle,
  ContainerData,
  FormData,
  InputTitle,
  InputDescricao,
  ButtonFormData,
  ButtonFormDataText,
} from './styles';

const BottomSheetAddSubject: React.FC = () => {
  const { setShowModal, showModal, storeData } = useContext(DashboardContext);
  const [selectedDayValue, setSelectedDayValue] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <BottomSheet
      containerStyle={{
        backgroundColor: 'rgba(0.5, 0.25, 0, 0.7)',
        height: 350,
        width: '100%',
      }}
      modalProps={{ animationType: 'slide' }}
      isVisible={showModal}
    >
      <Container>
        <Banner source={banner} />
        <ContainerTop>
          <ContainerTopTitle>Adicionar nova entrada</ContainerTopTitle>
          <TouchableOpacity
            onPress={() => {
              setShowModal(false);
              Keyboard.dismiss();
            }}
          >
            <Icon name="x-square" size={32} color="#000" />
          </TouchableOpacity>
        </ContainerTop>

        <ContainerData>
          <FormData>
            <InputTitle
              placeholder="Título"
              value={title}
              onChangeText={text => setTitle(text)}
            />
            <InputDescricao
              value={description}
              onChangeText={text => setDescription(text)}
              placeholder="Descrição"
              multiline
              scrollEnabled
              numberOfLines={5}
              maxLength={180}
            />
            <Picker
              mode="dropdown"
              selectedValue={selectedDayValue}
              onValueChange={value => setSelectedDayValue(value.toString())}
            >
              <Picker.Item label="Domingo" value="0" />
              <Picker.Item label="Segunda-Feira" value="1" />
              <Picker.Item label="Terça-Feira" value="2" />
              <Picker.Item label="Quarta-Feira" value="3" />
              <Picker.Item label="Quinta-Feira" value="4" />
              <Picker.Item label="Sexta-Feira" value="5" />
              <Picker.Item label="Sábado" value="6" />
            </Picker>
          </FormData>
          <ButtonFormData
            activeOpacity={0.5}
            onPress={() => {
              const dataRegisters = {
                id: uuid(),
                title,
                description,
                day: Number(selectedDayValue),
              };
              storeData(dataRegisters);
            }}
          >
            <ButtonFormDataText>Salvar</ButtonFormDataText>
          </ButtonFormData>
        </ContainerData>
      </Container>
    </BottomSheet>
  );
};

export default BottomSheetAddSubject;
