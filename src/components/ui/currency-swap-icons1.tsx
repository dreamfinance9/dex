import { Bitcoin } from '@/components/icons/bitcoin';
import { Ethereum } from '@/components/icons/ethereum';
import { Tether } from '@/components/icons/tether';
import { Bnb } from '@/components/icons/bnb';
import { Usdc } from '@/components/icons/usdc';
import { Dai } from '@/components/icons/dai';
import { Lot } from '@/components/icons/lot';
import { Doge } from '@/components/icons/doge';
import { Atom } from '@/components/icons/atom';

export type CoinList = 'BTCB' | 'WETH' | 'USDT' | 'BUSD' | 'USDC' | 'LOT' | 'DAI' | 'ATOM';

const coinIcons: Record<CoinList, JSX.Element> = {
  BTCB: <Bitcoin />,
  WETH: <Ethereum />,
  USDT: <Tether />,
  BUSD: <Bnb />,
  USDC: <Usdc />,
  DAI: <Dai />,
  LOT: <Lot />,
  XDF: <Doge />,
  ATOM: <Atom />,
};

interface CurrencySwapIconsProps {
  from: CoinList;
  to: CoinList;
}

export default function CurrencySwapIcons({
  from,
  to,
}: CurrencySwapIconsProps) {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <div className="relative">{coinIcons[from]}</div>
        <div className="ltr:-ml-1.5 rtl:-mr-1.5">{coinIcons[to]}</div>
      </div>
      <div className="whitespace-nowrap text-sm font-medium uppercase text-black ltr:ml-3 rtl:mr-3 dark:text-white">
        {from}{to}
      </div>
    </div>
  );
}
