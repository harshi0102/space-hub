import logo from '../assets/logo.png';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.heading}>
      <div>
        <img src={logo} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
    </header>
  );
}
export default Header;
