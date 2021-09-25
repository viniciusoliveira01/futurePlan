import styled from 'styled-components/native';
import colors from '@config/colors';
import { ProgressPercentProps } from '@src/types/historyCard';

export const HistoryCardContainer = styled.View`
    backgroundColor: ${colors.white};
    margin-horizontal: 20px;
    margin-top: 40px;
    border-radius: 5px;
    shadow-color: ${colors.black};
    shadow-offset: {
    width: 0px,
    height: 3px
    };
    shadow-opacity: 0.27;
    shadow-radius: 4.65;
    elevation: 1;
`;

export const DateContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const DateView = styled.View<ProgressPercentProps>`
  width: 50px;
  background-color: ${({ progressPercent }) =>
    progressPercent === 100 ? colors.green : colors.purple};
  margin-top: -10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const DateText = styled.Text`
  color: ${colors.white};
  font-size: 10px;
  margin: 5px;
  margin-horizontal: 10px;
  font-weight: 700;
`;

export const ContentContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ContentRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const GoalText = styled.Text<ProgressPercentProps>`
  color: ${({ progressPercent }) =>
    progressPercent === 100 ? colors.green : colors.lightGrey};
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: 700;
`;
