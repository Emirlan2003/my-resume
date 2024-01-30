import { Links } from "@enums/links";
import { LanguageSelector } from "@ui-kit/languageSelector";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Links.logo} alt="" className={styles.logo} />
      <LanguageSelector />
    </div>
  );
};
