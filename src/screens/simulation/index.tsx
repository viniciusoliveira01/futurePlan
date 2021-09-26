import React, { useState } from 'react';
import { StatusBar, Text } from 'react-native';
import colors from '@config/colors';
// import { TextField } from 'react-native-material-textfield';
import {
  Container,
  SimulationButton,
  SimulationContainer,
  SimulationTextButton,
  Divider,
  InvestimentTitle,
  ChartContainer,
} from './index.style';

import SimulateModal from './components/SimulateModal';

const SimulationScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [initialValue, setInitialValue] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(2);
  const [months, setMonths] = useState(120);
  const [monthlyContribution, setmonthlyContribution] = useState(2000);
  const [investedValueWithoutIncome, setInvestedValueWithoutIncome] =
    useState(0);
  const [dividends, setDividends] = useState(0);
  const [
    investedValueWithIncomeAndMontly,
    setInvestedValueWithIncomeAndMontly,
  ] = useState(0);

  const onModalShow = () => {
    setModalVisible(true);
  };

  const onModalClose = () => {
    setModalVisible(false);
  };

  const calculateInvestedValueWithoutIncome = () =>
    initialValue + months * monthlyContribution;

  const calculateInvestedValueWithIncomeMonthly = () => {
    let ratePercentage = monthlyIncome / 100;
    let denominator = Math.pow(ratePercentage + 1, months) - 1;

    return parseFloat(
      monthlyContribution * (denominator / ratePercentage),
    ).toFixed(2);
  };

  const calculateDividends = (valueWithIncomeAndMontly) => {
    return ((valueWithIncomeAndMontly * monthlyIncome) / 10).toFixed(2);
  };

  const onSimulate = () => {
    // Calculate the value without income rate
    let valueWithoutIncome = calculateInvestedValueWithoutIncome();
    setInvestedValueWithoutIncome(valueWithoutIncome);

    // Calculate the value with income rate and monthly contributions
    let valueWithIncomeAndMontly = calculateInvestedValueWithIncomeMonthly();
    setInvestedValueWithIncomeAndMontly(valueWithIncomeAndMontly);

    // Calculate the dividends
    let dividendsValue = calculateDividends(valueWithIncomeAndMontly);
    setDividends(dividendsValue);

    onModalShow();
  };
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={colors.darkPurple} />

      {/* <HeaderComponent title="Simulate" /> */}

      <SimulationContainer>
        {/* <TextField
          label="Valor inicial"
          value={initialValue}
          onChangeText={(initialValueText) =>
            setInitialValue(parseInt(initialValueText))
          }
          containerStyle={{ width: '100%' }}
          textColor={colors.lightGrey}
          tintColor={colors.lightGrey}
          baseColor={colors.lightGrey}
          keyboardType="number-pad"
        />

        <TextField
          label="Rendimento mensal"
          value={monthlyIncome}
          onChangeText={(monthlyIncomeText) =>
            setMonthlyIncome(parseInt(monthlyIncomeText))
          }
          containerStyle={{ width: '100%' }}
          textColor={colors.lightGrey}
          tintColor={colors.lightGrey}
          baseColor={colors.lightGrey}
          keyboardType="number-pad"
        />

        <TextField
          label="Meses"
          value={months}
          onChangeText={(monthsText) => setMonths(parseInt(monthsText))}
          containerStyle={{ width: '100%' }}
          textColor={colors.lightGrey}
          tintColor={colors.lightGrey}
          baseColor={colors.lightGrey}
          keyboardType="number-pad"
        />

        <TextField
          label="Aportes mensais"
          value={monthlyContribution}
          onChangeText={(monthlyContributionText) =>
            setmonthlyContribution(parseInt(monthlyContributionText))
          }
          containerStyle={{ width: '100%' }}
          textColor={colors.lightGrey}
          tintColor={colors.lightGrey}
          baseColor={colors.lightGrey}
          keyboardType="number-pad"
        /> */}

        <SimulationButton onPress={() => onSimulate()}>
          <SimulationTextButton>Simular</SimulationTextButton>
        </SimulationButton>

        <SimulateModal
          isModalVisible={isModalVisible}
          onModalClose={onModalClose}
          investedValueWithoutIncome={investedValueWithoutIncome}
          investedValueWithIncomeAndMontly={investedValueWithIncomeAndMontly}
          dividends={dividends}
          months={months}
        />
      </SimulationContainer>
    </Container>
  );
};

export default SimulationScreen;
