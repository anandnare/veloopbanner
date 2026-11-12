import { ShieldCheck, Gem, ChevronRight } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner.jsx';
import s from '../RewardBanner/RewardBanner.module.css';
import art from '../../assets/art-captcha.jpg';

export default function CaptchaTasksBanner() {
  return (
    <RewardBanner
      theme="captcha"
      heading={<>Solve Captchas.<br /><span>Earn Gems.</span></>}
      description="Complete simple captcha tasks accurately and earn eligible Gem rewards."
      image={art}
      imageAlt="A laptop showing the captcha K7M4 with purple gems around it"
      ctaText="Start Task"
      route="/captcha"
    >
      <ol className={s.flow} aria-label="Captcha, verify, Gem reward">
        <li className={s.node}>K7M4</li>
        <ChevronRight size={16} className={s.arrow} aria-hidden="true" />
        <li className={s.node}><ShieldCheck size={20} aria-label="Verified" /></li>
        <ChevronRight size={16} className={s.arrow} aria-hidden="true" />
        <li className={s.node}><Gem size={20} aria-label="Gem reward" /></li>
      </ol>
    </RewardBanner>
  );
}
