import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import art from '../../assets/art-swap.jpg';

export default function SwapCenterBanner() {
  return (
    <RewardBanner
      theme="swap"
      heading={<><span>Swap</span> Center</>}
      description="Convert eligible reward balances between supported currencies."
      image={art}
      imageAlt="VE and SVE reward cards with a swap icon between them over a reward wallet"
      ar={1.422}
      ctaText="Open Swap Center"
      route="/swap"
    />
  );
}
