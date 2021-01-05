import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';

import { ListDaysProps } from './index';

interface ListDaysItemProps {
  selected?: boolean;
}

interface ListDaysItemTitleProps {
  selected?: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const Banner = styled.Image`
  width: ${Dimensions.get('screen').width}px;
  height: 300px;
  margin-bottom: -30px;
`;

export const ContentList = styled.View`
  width: ${Dimensions.get('screen').width}px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

// eslint-disable-next-line prettier/prettier
export const FlatListDays = styled(FlatList as new () => FlatList<ListDaysProps>)`
  height: 100px;
`;

export const ListDaysItem = styled.TouchableOpacity<ListDaysItemProps>`
  background-color: ${props => (props.selected ? '#ff5722' : '#fff')};
  width: 50px;
  height: ${props => (props.selected ? 75 : 70)}px;
  border: 1px solid ${props => (props.selected ? '#ff5722' : '#ddd')};
  border-radius: 15px;
  margin: 12px;
  justify-content: center;
  align-items: center;
`;

export const ListDaysItemTitle = styled.Text<ListDaysItemTitleProps>`
  color: ${props => (props.selected ? '#fff' : '#ccc')};
`;

export const ContentListData = styled.View`
  width: 100%;
  flex: 1;
`;

export const ContentListDataTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`;

export const ContentListDataTitle = styled.Text`
  font-size: 22px;
`;
