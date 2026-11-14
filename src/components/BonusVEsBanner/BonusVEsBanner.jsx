import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import art from '../../assets/art-bonus.jpg';

export default function BonusVEsBanner() {
  return (
    <RewardBanner
      theme="bonus"
      heading={<>Boost Your<br /><span>VE Balance</span></>}
      description="Complete eligible activities and unlock additional VEs through special bonus opportunities."
      image={art}
      imageAlt="Daily check-in, invite friends and complete tasks cards feeding a glowing Bonus VE coin beside a vault of VE coins"
      ar={1.331}
      ctaText="Explore Bonuses"
      route="/bonus"
    />
  );
}
