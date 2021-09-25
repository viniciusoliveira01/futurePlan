import React from 'react';
import styled from 'styled-components/native';
import { Icon } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { CardTextProps } from '@types/accountCard';
import colors from '@config/colors';

export const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`;

export const CardText = styled.Text<CardTextProps>`
  color: ${colors.white};
  font-size: ${({ type }) => (type === 'name' ? '16px' : '12px')};
  font-weight: ${({ type }) => (type === 'name' ? 500 : 200)};
`;

export const AccountCardContainer = styled.TouchableOpacity``;

export const StyledIcon = styled(Icon)`
  margin-right: 10px;
  color: ${colors.white}
  font-size: 20px;
`;

export const StyledLinearGradient = styled(LinearGradient)`
  margin-right: 10px;
  color: ${colors.white};
  font-size: 20px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 5px;
  margin-horizontal: 20px;
`;
