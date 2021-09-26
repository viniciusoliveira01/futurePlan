import React from 'react';
import { render } from '@testing-library/react-native';
import AccountCard from './AccountCard';

describe('Account card', () => {
  it('Should render Account Card', () => {
    const { toJSON } = render(
      <AccountCard
        title="Simule seus investimentos"
        text="e veja quanto você terá investido no futuro"
        icon="ios-arrow-forward"
        theme={['7025FF', '#4e19b2']}
        onSimulate={() => {}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should render card title and text ', () => {
    const { getByText } = render(
      <AccountCard
        title="Card title"
        text="card text"
        icon="ios-arrow-forward"
        theme={['7025FF', '#4e19b2']}
        onSimulate={() => {}}
      />,
    );

    expect(getByText(/Card title/i)).toBeTruthy();
    expect(getByText(/card text/i)).toBeTruthy();
  });
});
