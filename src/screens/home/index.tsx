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
          cardName="Simule seus investimentos"
          cardType="e veja quanto você terá investido no futuro"
          icon="ios-arrow-forward"
          theme={[colors.purple, colors.darkPurple]}
          onSimulate={() => navigation.navigate('Simulate')}
        />

        <Divider />

        <HistoryContainer>
          <HistoryCard
            title="Atingir 10k"
            valueNow={10000}
            goal={10000}
            dateYear="2019"
          />

          <HistoryCard
            title="Atingir 100k"
            valueNow={50000}
            goal={100000}
            dateYear="2020"
          />

          <HistoryCard
            title="Atingir 1 milhão"
            valueNow={50000}
            goal={1000000}
            dateYear="2027"
          />
        </HistoryContainer>
      </HomeContainer>
    </Container>
  );
}
