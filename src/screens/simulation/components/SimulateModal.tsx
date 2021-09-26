import React from 'react';
import { Dimensions, View, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Icon } from 'native-base';
import Modal from 'react-native-modal';

import {
  ModalContainer,
  HeaderModal,
  InvestimentTitle,
  InvestimentRow,
  InvestimentText,
  ChartContainer,
} from './SimulateModal.style';

const SimulateModal = ({
  isModalVisible,
  onModalClose,
  investedValueWithoutIncome,
  dividends,
  investedValueWithIncomeAndMontly,
  months,
}) => {
  return (
    <Modal
      isVisible={isModalVisible}
      animationInTiming={500}
      animationOutTiming={500}
      onBackdropPress={onModalClose}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
    >
      <ModalContainer>
        <HeaderModal>
          <InvestimentTitle>
            Gráfico do dinheiro em relação ao tempo
          </InvestimentTitle>
          <TouchableOpacity
            onPress={() => onModalClose()}
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
          >
            <Icon name="close" color="#000" />
          </TouchableOpacity>
        </HeaderModal>

        <ChartContainer>
          <LineChart
            data={{
              labels: ['10 meses', '30 meses', '60 meses', `${months} meses`],
              datasets: [
                {
                  data: [
                    '10000',
                    '120000',
                    '400000',
                    parseInt(investedValueWithIncomeAndMontly),
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width - 50} // from react-native
            height={250}
            yAxisLabel={'R$'}
            chartConfig={{
              backgroundColor: '#7025FF',
              backgroundGradientFrom: '#7025FF',
              backgroundGradientTo: '#4e19b2',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 5,
            }}
          />
        </ChartContainer>
        <InvestimentRow>
          <InvestimentTitle>Total acumulado: </InvestimentTitle>
          <InvestimentText>
            R$ {investedValueWithIncomeAndMontly}
          </InvestimentText>
        </InvestimentRow>
        <InvestimentRow>
          <InvestimentTitle>Total investido: </InvestimentTitle>
          <InvestimentText>R$ {investedValueWithoutIncome}</InvestimentText>
        </InvestimentRow>
        <InvestimentRow>
          <InvestimentTitle>Juros total: </InvestimentTitle>
          <InvestimentText>
            R$
            {(
              investedValueWithIncomeAndMontly - investedValueWithoutIncome
            ).toFixed(2)}
          </InvestimentText>
        </InvestimentRow>
        <InvestimentRow>
          <InvestimentTitle>Juros mensais: </InvestimentTitle>
          <InvestimentText>R$ {dividends}</InvestimentText>
        </InvestimentRow>
      </ModalContainer>
    </Modal>
  );
};

export default SimulateModal;
