import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Routes from './src/routes';
import DashboardProvider from './src/context/dashboardContext';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <DashboardProvider>
        <Routes />
      </DashboardProvider>
    </SafeAreaView>
  );
};

export default App;
