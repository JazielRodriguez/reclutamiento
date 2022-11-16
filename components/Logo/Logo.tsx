import styles from "../../styles/Logo/Logo.module.css";
import { LogoProps } from "../../types/props";
const Logo: React.FC<LogoProps> = (props) => {
  return (
    <div className={!props.loading ? styles.logo:styles['logo-loading']} >
      <h2>R-it</h2>
    </div>
  );
};
export default Logo;
