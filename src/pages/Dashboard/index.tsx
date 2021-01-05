import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AddModal from '../../components/AddModal';
import { DashboardContext } from '../../context/dashboardContext';

import {
  Container,
  Banner,
  ContentList,
  FlatListDays,
  ListDaysItem,
  ListDaysItemTitle,
  ContentListData,
  ContentListDataTop,
  ContentListDataTitle,
} from './styles';

import banner from '../../assets/banner-dashboard.jpg';

import data from '../../../data';
import ButtonAdd from '../../components/Button';
import CardItem from '../../components/CardItem';

export interface ListDaysProps {
  id: number;
  day: string;
}

const Dashboard: React.FC = () => {
  const [listDays] = useState<ListDaysProps[]>(data);
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const { setShowModal, listData, getData } = useContext(DashboardContext);

  useEffect(() => {
    getData(selectedDay);
  }, [getData, selectedDay]);

  return (
    <Container>
      <Banner source={banner} />

      <ContentList>
        <FlatListDays
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}
          horizontal
          data={listDays}
          keyExtractor={item => String(item.id)}
          renderItem={({ item, index }) => (
            <ListDaysItem
              activeOpacity={0.8}
              selected={index === selectedDay}
              onPress={() => setSelectedDay(index)}
            >
              <ListDaysItemTitle selected={index === selectedDay}>
                {item.day}
              </ListDaysItemTitle>
            </ListDaysItem>
          )}
        />
      </ContentList>

      <ContentListData>
        <ContentListDataTop>
          <ContentListDataTitle>Calendário de Estudos</ContentListDataTitle>
          <ButtonAdd onPress={() => setShowModal(true)} />
        </ContentListDataTop>

        <View style={{ borderWidth: 1, flex: 1 }}>
          {listData.length === 0 && (
            <ActivityIndicator color="#000" size={35} />
          )}
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 25 }}
            data={listData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return <CardItem />;
            }}
          />
        </View>
      </ContentListData>

      <AddModal />
    </Container>
  );
};

export default Dashboard;
