import React from 'react';
import { StatusBar } from 'react-native';
import colors from '@config/colors';
import AccountCard from './components/AccountCard';
import HistoryCard from './components/HistoryCard';
import {
  Container,
  HomeContainer,
  Divider,
  HistoryContainer,
} from '@screens/home/index.style';

export default function HomeScreen({ navigation }) {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={colors.darkPurple} />

      <HomeContainer>
        <AccountCard
          title="Simule seus investimentos"
          text="e veja quanto você terá investido no futuro"
          icon="ios-arrow-forward"
          theme={[colors.purple, colors.darkPurple]}
          onSimulate={() => navigation.navigate('Simulation')}
        />

        <Divider />

        <HistoryContainer>
          <HistoryCard
            title="Atingir 100k"
            valueNow={100000}
            goal={100000}
            dateYear="2019"
          />

          <HistoryCard
            title="Atingir 500k"
            valueNow={480000}
            goal={500000}
            dateYear="2022"
          />

          <HistoryCard
            title="Atingir 1 milhão"
            valueNow={480000}
            goal={1000000}
            dateYear="2027"
          />
        </HistoryContainer>
      </HomeContainer>
    </Container>
  );
}
