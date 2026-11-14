import { useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './RewardBanner.module.css';

/**
 * Reusable banner shell. Layout, sizing, CTA, hover/focus states and themes
 * live here; each banner supplies copy, artwork, extras and a theme.
 *
 * `ar` is the artwork aspect ratio (width / height). It reserves the right
 * amount of space on mobile so the illustration is always shown in full.
 */
export default function RewardBanner({
  theme,
  badge,
  BadgeIcon,
  heading,
  description,
  image,
  imageAlt = '',
  ar = 1.3,
  ctaText,
  route = '/',
  secondary,
  footer,
  children,
}) {
  const navigate = useNavigate();
  const headingId = useId();
  const go = (to) => navigate(to);

  return (
    <section
      className={`${styles.banner} ${styles[theme] || ''}`}
      aria-labelledby={headingId}
      onClick={() => go(route)}
    >
      <div className={styles.body}>
        <div className={styles.content}>
          {badge && (
            <span className={styles.badge}>
              {BadgeIcon && <BadgeIcon size={14} aria-hidden="true" />}
              {badge}
            </span>
          )}
          <h2 id={headingId} className={styles.heading}>{heading}</h2>
          <p className={styles.desc}>{description}</p>

          {children}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cta}
              onClick={(e) => { e.stopPropagation(); go(route); }}
            >
              <span>{ctaText}</span>
              <ArrowRight size={18} aria-hidden="true" className={styles.arrow} />
            </button>
            {secondary && (
              <button
                type="button"
                className={styles.ghost}
                onClick={(e) => { e.stopPropagation(); go(secondary.route); }}
              >
                {secondary.icon}
                {secondary.text}
              </button>
            )}
          </div>
        </div>

        <div className={styles.stage} style={{ '--ar': ar }}>
          <img className={styles.art} src={image} alt={imageAlt} width="900" height={Math.round(900 / ar)} decoding="async" />
        </div>
      </div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </section>
  );
}
