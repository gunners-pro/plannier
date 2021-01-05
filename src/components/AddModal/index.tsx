import React, { useContext, useState } from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import uuid from 'uuid-random';

import { DashboardContext } from '../../context/dashboardContext';

import {
  Container,
  ContainerTop,
  ContainerTopTitle,
  ContainerData,
  FormData,
  InputTitle,
  InputDescricao,
  ButtonFormData,
  ButtonFormDataText,
} from './styles';

const AddModal: React.FC = () => {
  const { setShowModal, showModal, storeData } = useContext(DashboardContext);
  const [selectedDayValue, setSelectedDayValue] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <Modal
      style={{ backgroundColor: '#fff' }}
      isVisible={showModal}
      onBackButtonPress={() => setShowModal(false)}
      useNativeDriver
    >
      <Container>
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
    </Modal>
  );
};

export default AddModal;
