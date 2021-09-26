import styled from 'styled-components/native';
import colors from '@config/colors';

export const Container = styled.View`
  flex: 1;
`;
export const SimulationContainer = styled.View`
  margin-top: 30px;
  padding: 15px;
  align-items: center;
`;

export const Divider = styled.View`
  height: 1;
  background-color: #f3f3f3;
  margin-top: 40;
`;

export const SimulationButton = styled.TouchableOpacity`
  height: 50px;
  width: 150px;
  border-radius: 5px;
  background-color: ${colors.purple};
  margin: 40px 0;
  align-items: center;
  justify-content: center;
`;

export const SimulationTextButton = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const InvestimentTitle = styled.Text`
  color: ${colors.lightGrey};
  font-size: 15px;
  font-weight: 300;
  text-align: left;
  padding: 0 0 0px 10px;
`;

export const ChartContainer = styled.View`
  align-items: center;
`;
