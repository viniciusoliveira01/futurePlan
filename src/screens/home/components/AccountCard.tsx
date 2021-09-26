import React from 'react';
import { View } from 'react-native';
import { AccountCardProps } from '@src/types/accountCard';
import {
  AccountCardContainer,
  StyledLinearGradient,
  CardContainer,
  CardText,
  StyledIcon,
} from './AccountCard.style';

const AccountCard = ({
  theme,
  title,
  text,
  icon,
  onSimulate,
}: AccountCardProps) => {
  return (
    <AccountCardContainer activeOpacity={0.8} onPress={() => onSimulate()}>
      <StyledLinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={theme}
      >
        <CardContainer>
          <View>
            <CardText type="name">{title}</CardText>
            <CardText>{text}</CardText>
          </View>
        </CardContainer>

        <StyledIcon name={icon} />
      </StyledLinearGradient>
    </AccountCardContainer>
  );
};

export default AccountCard;
