import React from "react";
import { Select } from "antd";
import { LocalStorage } from "@localStorage/localStorage";
import { LocalStorageKey } from "@enums/localStorage";
import i18n from "../../i18n";
import styles from "./LanguageSelector.module.scss";

const { Option } = Select;

export const LanguageSelector = () => {
  const lang = LocalStorage.getItem(LocalStorageKey.Lang);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    LocalStorage.setItem(LocalStorageKey.Lang, language);
    window.location.reload();
  };

  const props = {
    defaultValue: lang,
    style: { width: 70 },
    onChange: changeLanguage,
  };

  return (
    <Select {...props} className={styles.select}>
      <Option value="en">EN</Option>
      <Option value="ru">RU</Option>
      <Option value="ky">KY</Option>
    </Select>
  );
};
