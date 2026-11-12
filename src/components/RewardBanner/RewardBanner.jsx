import { useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './RewardBanner.module.css';

/**
 * Reusable banner shell. Layout, sizing, CTA and themes live here;
 * each banner supplies its own copy, artwork, extras and theme.
 */
export default function RewardBanner({
  theme = 'captcha',
  badge,
  BadgeIcon,
  heading,
  description,
  image,
  imageAlt = '',
  ctaText,
  route = '/',
  secondary,
  rule = false,
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
      <div className={styles.main}>
        <div className={styles.content}>
          {badge && (
            <span className={styles.badge}>
              {BadgeIcon && <BadgeIcon size={14} aria-hidden="true" />}
              {badge}
            </span>
          )}
          <h2 id={headingId} className={styles.heading}>{heading}</h2>
          {rule && <span className={styles.rule} aria-hidden="true" />}
          <p className={styles.desc}>{description}</p>

          {children && <div className={styles.extra}>{children}</div>}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cta}
              onClick={(e) => { e.stopPropagation(); go(route); }}
            >
              {ctaText}
              <span className={styles.ctaIcon}><ArrowRight size={16} aria-hidden="true" /></span>
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

        <div className={styles.media}>
          <img className={styles.art} src={image} alt={imageAlt} loading="lazy" decoding="async" />
        </div>
      </div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </section>
  );
}
