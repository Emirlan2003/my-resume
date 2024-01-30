import { projectList } from "@constants/projects";
import { useTranslation } from "react-i18next";
import { FlipCard } from "@ui-kit/flipCard";
import styles from "./Projects.module.scss";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.body}>
      <div className={styles.title}>{t("work.title")}</div>
      <div className={styles.cardList}>
        {projectList.map((item) => (
          <FlipCard data={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};
