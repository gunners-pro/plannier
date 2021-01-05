import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type DashboardContext = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  listData: DataProps[];
  storeData(value: DataProps): void;
  getData(day: number): void;
};

export const DashboardContext = createContext<DashboardContext>(
  {} as DashboardContext,
);

interface DataProps {
  id: string;
  title: string;
  description: string;
  day: number;
}

const DashboardProvider: React.FC = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [listData, setListData] = useState<DataProps[]>([]);

  async function storeData(value: DataProps) {
    let dados = [];

    try {
      let getAllData = await AsyncStorage.getItem(`@Plannier:data`);
      if (getAllData !== null) {
        dados = JSON.parse(getAllData);
      }

      dados.push(value);

      const stringValue = JSON.stringify(dados);
      await AsyncStorage.setItem('@Plannier:data', stringValue);

      setListData(dados);
    } catch (e) {
      // erro
    }
  }

  async function getData(day: number) {
    try {
      const getAllData = await AsyncStorage.getItem(`@Plannier:data`);
      if (!getAllData) {
        return;
      }
      const dataConvert: DataProps[] = JSON.parse(getAllData);
      const dataFiltered = dataConvert.filter(item => item.day === day);

      setListData(dataFiltered);
    } catch (e) {
      // saving error
    }
  }

  return (
    <DashboardContext.Provider
      value={{
        showModal,
        setShowModal,
        listData,
        storeData,
        getData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
