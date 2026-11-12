import { ClipboardCheck, Users, TrendingUp } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import s from '../RewardBanner/RewardBanner.module.css';
import art from '../../assets/art-bonus.jpg';

const ITEMS = [
  { Icon: ClipboardCheck, title: 'Daily Check-in', sub: 'Stay active' },
  { Icon: Users, title: 'Invite Friends', sub: 'Grow together' },
  { Icon: TrendingUp, title: 'Complete Tasks', sub: 'Earn more' },
];

export default function BonusVEsBanner() {
  return (
    <RewardBanner
      theme="bonus"
      rule
      heading={<>Boost Your<br /><span>VE Balance</span></>}
      description="Complete eligible activities and unlock additional VEs through special bonus opportunities."
      image={art}
      imageAlt="A glowing BONUS VE coin above a pedestal beside an open vault full of VE coins"
      ctaText="Explore Bonuses"
      route="/bonus"
    >
      <ul className={s.chips}>
        {ITEMS.map(({ Icon, title, sub }) => (
          <li key={title} className={s.chip}>
            <Icon size={18} aria-hidden="true" />
            <span><strong>{title}</strong><small>{sub}</small></span>
          </li>
        ))}
      </ul>
    </RewardBanner>
  );
}
