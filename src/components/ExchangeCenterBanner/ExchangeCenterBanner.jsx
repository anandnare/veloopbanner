import { Gem, RefreshCw } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import Flow from '../RewardBanner/Flow.jsx';
import art from '../../assets/art-exchange.jpg';

export default function ExchangeCenterBanner() {
  return (
    <RewardBanner
      theme="exchange"
      heading={<>Convert Gems to <em>VEs</em></>}
      description="Exchange eligible Gems into VEs and grow your VE balance."
      image={art}
      imageAlt="A Gem card converting into a VE coin card with an exchange rate panel"
      ar={1.982}
      ctaText="Open Exchange Center"
      route="/exchange"
    >
      <Flow
        label="Gem, convert, VE"
        items={[
          { node: <Gem size={20} aria-label="Gem" />, label: 'GEM' },
          { node: <RefreshCw size={20} aria-label="Convert" />, label: 'CONVERT' },
          { node: 'VE', label: 'VE' },
        ]}
      />
    </RewardBanner>
  );
}
