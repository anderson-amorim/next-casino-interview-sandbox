type FiatCurrency = 'JPY' | 'EUR' | 'CAD' | 'USD';
type CryptoCurrency =
  | 'BTC'
  | 'ETH'
  | 'LTC'
  | 'TRX'
  | 'XRP'
  | 'USDT'
  | 'DOGE'
  | 'ADA';

export type Currency = FiatCurrency | CryptoCurrency;
