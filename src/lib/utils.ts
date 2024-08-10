import dayjs from 'dayjs';

export const currencyFormat = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(value);
};

export const dateFormat = (timestamp: number): string =>
  dayjs(timestamp).format('DD/MM/YYYY - HH:mm:ss');
