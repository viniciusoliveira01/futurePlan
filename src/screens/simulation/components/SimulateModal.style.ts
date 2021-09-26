import styled from 'styled-components/native';
import colors from '@config/colors';

export const ModalContainer = styled.View`
  background-color: #fff;
  border-radius: 6;
  padding: 20px 0 30px 0;
`;

export const HeaderModal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const InvestimentTitle = styled.Text`
  color: ${colors.darkGrey};
  font-size: 15px;
  font-weight: 500;
  text-align: left;
`;

export const ChartContainer = styled.View`
  align-items: center;
`;

export const InvestimentText = styled.Text`
  color: ${colors.lightGrey};
  font-size: 13px;
  font-weight: 300;
  text-align: left;
`;

export const InvestimentRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;
