import { ShieldCheck, Gem } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import Flow from '../RewardBanner/Flow.jsx';
import art from '../../assets/art-captcha.jpg';

export default function CaptchaTasksBanner() {
  return (
    <RewardBanner
      theme="captcha"
      heading={<>Solve Captchas.<br /><span>Earn Gems.</span></>}
      description="Complete simple captcha tasks accurately and earn eligible Gem rewards."
      image={art}
      imageAlt="Laptop showing the captcha K7M4 with a checkmark button and Gem rewards"
      ar={1.338}
      ctaText="Start Task"
      route="/captcha"
    >
      <Flow
        label="Captcha, verify, Gem reward"
        items={[
          { node: 'K7M4' },
          { node: <ShieldCheck size={20} aria-label="Verified" /> },
          { node: <Gem size={20} aria-label="Gem reward" /> },
        ]}
      />
    </RewardBanner>
  );
}
