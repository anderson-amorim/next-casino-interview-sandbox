const currency = 'BTC';

if (currency) {
  console.log(currency);
}
if (!currency) {
  console.log('no currency');
}
if (!!currency) {
  console.log(currency);
}

if (1 == '1') {
  console.log('value is equal');
}

if (1 === '1') {
  console.log('value is equal');
}

export const isSsr = () => typeof window === 'undefined';
