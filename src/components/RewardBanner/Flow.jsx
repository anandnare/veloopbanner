import styles from './RewardBanner.module.css';

/** Small 3-step flow (e.g. Gem → Convert → VE). items: [{ node, label? }] */
export default function Flow({ items, label }) {
  return (
    <ol className={styles.flow} aria-label={label}>
      {items.map((it, i) => (
        <li key={i} className={styles.step}>
          <span className={styles.nodeWrap}>
            <span className={styles.node}>{it.node}</span>
            {it.label && <small>{it.label}</small>}
          </span>
          {i < items.length - 1 && <span className={styles.dots} aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}
