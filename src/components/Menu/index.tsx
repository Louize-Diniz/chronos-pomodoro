import { BoltIcon, HistoryIcon, HomeIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <div className={styles.menu}>
      <a className={styles.menuLinks} href='#'>
        <HomeIcon />
      </a>
      <a className={styles.menuLinks} href='#'>
        <HistoryIcon />
      </a>
      <a className={styles.menuLinks} href='#'>
        <BoltIcon />
      </a>
      <a className={styles.menuLinks} href='#'>
        <SunIcon />
      </a>
    </div>
  );
}
