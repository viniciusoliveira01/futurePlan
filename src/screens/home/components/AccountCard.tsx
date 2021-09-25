import React from 'react';
import { View } from 'react-native';
import { AccountCardProps } from '@types/accountCard';
import {
  AccountCardContainer,
  StyledLinearGradient,
  CardContainer,
  CardText,
  StyledIcon,
} from './AccountCard.style';

const AccountCard = ({
  theme,
  cardName,
  cardType,
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
            <CardText type="name">{cardName}</CardText>
            <CardText>{cardType}</CardText>
          </View>
        </CardContainer>

        <StyledIcon name={icon} />
      </StyledLinearGradient>
    </AccountCardContainer>
  );
};

export default AccountCard;
