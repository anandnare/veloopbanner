import { Fragment } from 'react';
import { Gem, RefreshCw, Coins, ChevronRight } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import s from '../RewardBanner/RewardBanner.module.css';
import art from '../../assets/art-exchange.jpg';

const STEPS = [
  { label: 'GEM', Icon: Gem },
  { label: 'CONVERT', Icon: RefreshCw },
  { label: 'VE', Icon: Coins },
];

export default function ExchangeCenterBanner() {
  return (
    <RewardBanner
      theme="exchange"
      heading={<>Convert <span>Gems</span> to VEs</>}
      description="Exchange eligible Gems into VEs and grow your VE balance."
      image={art}
      imageAlt="A GEM card converting into a golden VE card through an exchange icon"
      ctaText="Open Exchange Center"
      route="/exchange"
    >
      <ol className={s.flow} aria-label="Gem, convert, VE">
        {STEPS.map(({ label, Icon }, i) => (
          <Fragment key={label}>
            <li className={s.nodeCol}>
              <span className={s.node}><Icon size={20} aria-hidden="true" /></span>
              {label}
            </li>
            {i < STEPS.length - 1 && (
              <li aria-hidden="true" style={{ display: 'grid' }}>
                <ChevronRight size={16} className={s.arrow} />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </RewardBanner>
  );
}
