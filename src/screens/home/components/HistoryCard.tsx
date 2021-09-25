import React from 'react';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import colors from '@config/colors';
import {
  ContentContainer,
  ContentRow,
  DateContainer,
  DateView,
  DateText,
  HistoryCardContainer,
  GoalText,
} from './HistoryCard.style';
import { HistoryCardProps } from '@src/types/historyCard';

const HistoryCard = ({ title, valueNow, goal, dateYear }: HistoryCardProps) => {
  const progressPercent = (valueNow / goal) * 100;
  const isProgressCompleted =
    progressPercent === 100 ? colors.green : colors.purple;

  return (
    <HistoryCardContainer>
      <DateContainer>
        <DateView progressPercent={progressPercent}>
          <DateText>{dateYear}</DateText>
        </DateView>
      </DateContainer>
      <ContentContainer>
        <ContentRow>
          <GoalText progressPercent={progressPercent}>{title}</GoalText>
          <GoalText progressPercent={progressPercent}>
            {progressPercent}%
          </GoalText>
        </ContentRow>
        <ProgressBarAnimated
          width={300}
          value={progressPercent}
          backgroundColor={isProgressCompleted}
        />
      </ContentContainer>
    </HistoryCardContainer>
  );
};

export default HistoryCard;
