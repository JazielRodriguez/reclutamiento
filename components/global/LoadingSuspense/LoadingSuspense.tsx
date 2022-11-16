import styles from "../../../styles/LoadingSuspense/LoadingSuspense.module.css";
import Logo from "../../Logo/Logo";
import { useTranslation } from "react-i18next";
const LoadingSuspense: React.FC = () => {
  const { t } = useTranslation("loading");
  return (
    <main className={styles.loading}>
      <div className={styles.content}>
        <Logo loading />
        <div>
          <h1>{t("translation.loading")}...</h1>
        </div>
      </div>
    </main>
  );
};
export default LoadingSuspense;
