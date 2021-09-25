export type AccountCardProps = {
  theme: string[];
  cardName: string;
  cardType: string;
  icon?: string;
  onSimulate: () => void;
};

export type CardTextProps = {
  type?: string;
};
