import React from 'react';
import { render } from '@testing-library/react-native';
import HistoryCard, { calculateProgressPercent } from './HistoryCard';

describe('History Card', () => {
  it('Should render History Card', () => {
    const { toJSON } = render(
      <HistoryCard
        title="Atingir 20000000"
        valueNow={100000}
        goal={20000000}
        dateYear="2050"
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should show title, year and percentage', () => {
    const { getByText } = render(
      <HistoryCard
        title="Atingir 20000000"
        valueNow={100000}
        goal={20000000}
        dateYear="2050"
      />,
    );

    expect(getByText(/Atingir 20000000/i)).toBeTruthy();
    expect(getByText(/2050/i)).toBeTruthy();
    expect(getByText(/0.5%/i)).toBeTruthy();
  });

  it('Should calculate the percentage based on valueNow and Goal', () => {
    const valueNow = 72000;
    const goal = 100000;
    const progressPercent = calculateProgressPercent(valueNow, goal);

    expect(progressPercent).toBe(72);
  });

  it('Should calculate the percentage based on valueNow and Goal passed as strings', () => {
    const valueNow = '9000';
    const goal = '100000';
    const progressPercent = calculateProgressPercent(valueNow, goal);

    expect(progressPercent).toBe(9);
  });
});
