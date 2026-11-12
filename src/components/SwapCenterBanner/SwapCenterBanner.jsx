import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import art from '../../assets/art-swap.jpg';

export default function SwapCenterBanner() {
  return (
    <RewardBanner
      theme="swap"
      rule
      heading={<><span>Swap</span> Center</>}
      description="Convert eligible reward balances between supported currencies."
      image={art}
      imageAlt="A VE reward card and an SVE reward card with a circular swap icon over a reward wallet"
      ctaText="Open Swap Center"
      route="/swap"
    />
  );
}
