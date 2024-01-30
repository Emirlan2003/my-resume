import { Links } from "@enums/links";
import styles from "./DetailsInfo.module.scss";
import { useTranslation } from "react-i18next";
import {
  backendLanguage,
  backendStack,
  designLanguage,
  designStack,
  frontendLanguage,
  frontendStack,
} from "@constants/stack";

export const DetailsInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.body}>
      <div className={styles.descBlock}>
        <div className={styles.title}>{t("details.title")}</div>
        <div className={styles.desc}>{t("details.desc")}</div>
      </div>
      <div className={styles.stackBlock}>
        <div className={styles.stackBlockDetailsWhBorder}>
          <img src={Links.design} alt="" className={styles.img} />
          <div className={styles.stackTitle}>{t("details.design.title")}</div>
          <div className={styles.stackDesc}>{t("details.design.desc")}</div>
          <div className={styles.stackTools}>{t("details.design.language")}</div>
          <div className={styles.stackDesc}>{designLanguage}</div>
          <div className={styles.stackTools}>{t("details.design.tools")}</div>
          <div className={styles.stackDesc}>{designStack.map((item) => <div>{item}</div>)}</div>
        </div>
        <div className={styles.stackBlockDetailsWhBorder}>
          <img src={Links.frontend} alt="" className={styles.img} />
          <div className={styles.stackTitle}>{t("details.frontend.title")}</div>
          <div className={styles.stackDesc}>{t("details.frontend.desc")}</div>
          <div className={styles.stackTools}>{t("details.frontend.language")}</div>
          <div className={styles.stackDesc}>{frontendLanguage}</div>
          <div className={styles.stackTools}>{t("details.frontend.tools")}</div>
          <div className={styles.stackDesc}>{frontendStack.map((item) => <div>{item}</div>)}</div>
        </div>
        <div className={styles.stackBlockDetails}>
          <img src={Links.backend} alt="" className={styles.img} />
          <div className={styles.stackTitle}>{t("details.backend.title")}</div>
          <div className={styles.stackDesc}>{t("details.backend.desc")}</div>
          <div className={styles.stackTools}>{t("details.backend.language")}</div>
          <div className={styles.stackDesc}>{backendLanguage}</div>
          <div className={styles.stackTools}>{t("details.backend.tools")}</div>
          <div className={styles.stackDesc}>{backendStack.map((item) => <div>{item}</div>)}</div>
        </div>
      </div>
    </div>
  );
};
