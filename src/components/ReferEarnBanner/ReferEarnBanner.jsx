import { Users, Gift } from 'lucide-react';
import { FiZap, FiGift, FiShield, FiAward } from 'react-icons/fi';
import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import s from '../RewardBanner/RewardBanner.module.css';
import art from '../../assets/art-refer.jpg';

// Dummy copy – replace with approved referral rules before release.
const FEATURES = [
  { Icon: FiZap, tone: '#7b8cff', title: 'Easy to Share', text: 'Share your link or code in just one click.' },
  { Icon: FiGift, tone: '#c27bff', title: 'Instant Rewards', text: 'Earn VEs instantly when friends join.' },
  { Icon: FiShield, tone: '#35c8c0', title: '100% Secure', text: 'Secure referrals and real reward tracking.' },
  { Icon: FiAward, tone: '#e9bf62', title: 'Unlimited Earning', text: 'Invite more friends and earn more VEs.' },
];

export default function ReferEarnBanner() {
  return (
    <RewardBanner
      theme="refer"
      badge="REFER & EARN"
      BadgeIcon={Users}
      heading={<>Refer Friends,<br /><span>Earn Rewards</span></>}
      description="Invite your friends to VELOOP Rewards and earn exciting rewards together."
      image={art}
      imageAlt="Two friends with a gift box, a referral code card and VE coins"
      ar={1.208}
      ctaText="Invite Now"
      route="/refer"
      secondary={{ text: 'How It Works', route: '/how-it-works', icon: <Gift size={16} aria-hidden="true" /> }}
      footer={
        <ul className={s.features}>
          {FEATURES.map(({ Icon, tone, title, text }) => (
            <li key={title} className={s.feature} style={{ '--tone': tone }}>
              <span className={s.featureIcon}><Icon size={20} aria-hidden="true" /></span>
              <span><strong>{title}</strong><small>{text}</small></span>
            </li>
          ))}
        </ul>
      }
    />
  );
}
