import { Links } from "@enums/links";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <img src={Links.mainImage} alt="" className={styles.logo} />
      <div className={styles.title}>{t("footer.title")}</div>
      <div className={styles.social}>
        <a href="https://www.instagram.com/taalaibekovvv__/" target="blank">
          <img src={Links.instagram} alt="" className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/emir-taalaibekov-5a2419227/"
          target="blank"
        >
          <img src={Links.linkedin} alt="" className={styles.icon} />
        </a>
        <a href="https://t.me/undefinedOrNull" target="blank">
          <img src={Links.telegram} alt="" className={styles.icon} />
        </a>
        <a href="https://wa.me/996502281003" target="blank">
          <img src={Links.whatsapp} alt="" className={styles.icon} />
        </a>
        <a href="mailto:emir03kgkg@gmail.com" target="blank">
          <img src={Links.email} alt="" className={styles.icon} />
        </a>
        <a href="https://github.com/Emirlan2003/" target="blank">
          <img src={Links.github} alt="" className={styles.icon} />
        </a>
      </div>
      <div className={styles.made}>Made by Emir Taalaibekov</div>
    </div>
  );
};
