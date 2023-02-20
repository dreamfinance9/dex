import { CoinList } from '@/components/ui/currency-swap-icons1';

type FarmData = {
  id: number,
  from: CoinList,
  to: CoinList,
  earned: number,
  apr: number, // パーセンテージ
  liquidity: number, // ドル
  multiplier: number,
  live_status: 'LIVE' | 'FINISHED',
}

export const FarmsData: FarmData[] = [
  {
    id: 1,
    from: 'WBTC',
    to: '' as CoinList,
    earned: 0,
    apr: 2.50,
    liquidity: 94172,
    multiplier: 40,
    live_status: 'LIVE',
  },
  {
    id: 2,
    from: 'WETH',
    to: '' as CoinList,
    earned: 0,
    apr: 3.5,
    liquidity: 13294,
    multiplier: 10,
    live_status: 'LIVE',
  },
  {
    id: 3,
    from: 'USDC',
    to: '' as CoinList,
    earned: 0,
    apr: 9.0,
    liquidity: 33294,
    multiplier: 22,
    live_status: 'LIVE',
  },
  {
    id: 4,
    from: 'USDT',
    to: '' as CoinList,
    earned: 0,
    apr: 8.0,
    liquidity: 23294,
    multiplier: 20,
    live_status: 'LIVE',
  },
  {
    id: 5,
    from: 'BUSD',
    to: '' as CoinList,
    earned: 0,
    apr: 9.50,
    liquidity: 13294,
    multiplier: 34,
    live_status: 'FINISHED',
  },
  {
    id: 6,
    from: 'LOT',
    to: '' as CoinList,
    earned: 0,
    apr: 18.0,
    liquidity: 13293,
    multiplier: 34,
    live_status: 'LIVE',
  },
  {
    id: 7,
    from: 'DAI',
    to: '' as CoinList,
    earned: 0,
    apr: 9.8,
    liquidity: 13294,
    multiplier: 34,
    live_status: 'LIVE',
  },
  {
    id: 8,
    from: 'XDF',
    to: '' as CoinList,
    earned: 0,
    apr: 25.0,
    liquidity: 13294,
    multiplier: 34,
    live_status: 'LIVE',
  },
  {
    id: 9,
    from: 'ATOM',
    to: '' as CoinList,
    earned: 0,
    apr: 22.0,
    liquidity: 8324,
    multiplier: 34,
    live_status: 'LIVE',
  },
];
