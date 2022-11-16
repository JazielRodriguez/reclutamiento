import styles from "../styles/components/Header.module.css";
import Nav from "./Nav";
import { useMediaQuery } from "react-responsive";
const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <header className={styles.header}>
      <div className={styles["header-content"]}>
        <h1>Recruitment App</h1>
        <Nav mobileNavbar={isMobile ? true : false} />
      </div>
    </header>
  );
};
export default Header;
