import Link from "next/link";
import styles from '../styles/components/Nav.module.css'
import { NavProps } from "../../types/props";
const Nav: React.FC<NavProps> = (props) => {
  return (
    <nav className={styles.nav}>
      <Link href="/profile">Profile</Link>
      <Link href="/jobs">Jobs</Link>
    </nav>
  );
};
export default Nav;
