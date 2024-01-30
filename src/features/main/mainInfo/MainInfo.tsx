import { Links } from "@enums/links";
import { useTranslation } from "react-i18next";
import styles from "./MainInfo.module.scss";

export const MainInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.body}>
      <div className={styles.title}>{t("title")}</div>
      <div className={styles.desc}>{t("desc")}</div>
      <img src={Links.myPhoto} alt="" className={styles.myPhoto} />
      <img
        src="https://mattfarley.ca/img/hero-devices.svg"
        alt=""
        className={styles.device}
      />
    </div>
  );
};
