import React, { useState } from "react";
import { Button } from "antd";
import ReactCardFlip from "react-card-flip";
import { useTranslation } from "react-i18next";
import styles from "./FlipCard.module.scss";

interface IProps {
  title: string,
  style: string,
  desc: string,
  tools: string,
  url?: string,
};

export const FlipCard = ({ data }: { data: IProps }) => {
  const { t } = useTranslation();
  const [flip, setFlip] = useState(false);

  return (
    <ReactCardFlip isFlipped={flip}>
      <div className={styles.card}>
        <div className={styles[data.style]} />
        <div className={styles.btnBlock}>
          <div className={styles.mainTitle}>{data.title}</div>
          <Button className={styles.btn} onClick={() => setFlip(true)}>
            {t("more")}
          </Button>
        </div>
      </div>
      <div className={styles.cardBack}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.desc}>{t(`work.${data.desc}`)}</div>
        <div className={styles.tools}>{t("work.tools")}</div>
        <div className={styles.skills}>{data.tools}</div>
        <div className={styles.btnBlock}>
          {data.url && <a
            className={styles.btnA}
            href={data.url}
            target="blank"
          >
            {t("work.visit")}
          </a>}
          <Button
            className={styles.btnBack}
            onClick={() => setFlip(false)}
          >
            {t("back")}
          </Button>
        </div>
      </div>
    </ReactCardFlip>
  );
};
