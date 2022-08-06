import { Bitcoin } from '@/components/icons/bitcoin';
import { Ethereum } from '@/components/icons/ethereum';
import { Tether } from '@/components/icons/tether';
import { Bnb } from '@/components/icons/bnb';
import { Usdc } from '@/components/icons/usdc';
import { Cardano } from '@/components/icons/cardano';
import { Doge } from '@/components/icons/doge';

export const TopCurrencyData = [
  {
    id: 1,
    coin: { icon: <Tether />, symbol: 'USDT', name: 'Tether USD' },
    prices: [
      { name: 1, value: 12187.44 },
      { name: 2, value: 21356.99 },
      { name: 3, value: 37698.98 },
      { name: 4, value: 39587.55 },
      { name: 5, value: 29577.4 },
      { name: 6, value: 31577.4 },
      { name: 7, value: 47577.4 },
      { name: 8, value: 36577.4 },
      { name: 9, value: 28577.4 },
    ],
    usd_price: '1.01',
    usd_price_change_24h: 0.5,
    usd_marketcap: '72.35 B',
    usd_volume_24h: '25.43 B',
  },
  {
    id: 2,
    coin: { icon: <Bnb />, symbol: 'BNB', name: 'BUSD' },
    prices: [
      { name: 1, value: 15187.44 },
      { name: 2, value: 16356.99 },
      { name: 3, value: 17698.98 },
      { name: 4, value: 37587.55 },
      { name: 5, value: 17577.4 },
      { name: 6, value: 20577.4 },
      { name: 7, value: 29577.4 },
      { name: 8, value: 33577.4 },
      { name: 9, value: 39577.4 },
    ],
    usd_price: '1.01',
    usd_price_change_24h: 0.06,
    usd_marketcap: '42.41 B',
    usd_volume_24h: '13.98 B',
  },
  {
    id: 3,
    coin: { icon: <Usdc />, symbol: 'USDC', name: 'USD Coin' },
    prices: [
      { name: 1, value: 10187.44 },
      { name: 2, value: 21356.99 },
      { name: 3, value: 34698.98 },
      { name: 4, value: 35587.55 },
      { name: 5, value: 45577.4 },
      { name: 6, value: 39577.4 },
      { name: 7, value: 28577.4 },
      { name: 8, value: 33577.4 },
      { name: 9, value: 20577.4 },
    ],
    usd_price: '1.00',
    usd_price_change_24h: 0.0,
    usd_marketcap: '28.33 B',
    usd_volume_24h: '5.54 B',
  },
  {
    id: 4,
    coin: { icon: <Cardano />, symbol: 'PB', name: 'PB TOKEN' },
    prices: [
      { name: 1, value: 25187.44 },
      { name: 2, value: 21356.99 },
      { name: 3, value: 34698.98 },
      { name: 4, value: 37587.55 },
      { name: 5, value: 17577.4 },
      { name: 6, value: 26577.4 },
      { name: 7, value: 23577.4 },
      { name: 8, value: 18577.4 },
      { name: 9, value: 28577.4 },
    ],
    usd_price: '0.10',
    usd_price_change_24h: 2.6,
    usd_marketcap: '19.16 B',
    usd_volume_24h: '1.5 B',
  },
  {
    id: 5,
    coin: { icon: <Doge />, symbol: 'DF', name: 'DF TOKEN' },
    prices: [
      { name: 1, value: 9187.44 },
      { name: 2, value: 21356.99 },
      { name: 3, value: 34698.98 },
      { name: 4, value: 37587.55 },
      { name: 5, value: 17577.4 },
      { name: 6, value: 55577.4 },
      { name: 7, value: 49577.4 },
      { name: 8, value: 28577.4 },
      { name: 9, value: 28577.4 },
    ],
    usd_price: '0.10',
    usd_price_change_24h: 1.06,
    usd_marketcap: '10.77 B',
    usd_volume_24h: '345.43 M',
  },
];
