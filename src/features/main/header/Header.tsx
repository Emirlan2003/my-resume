import { Links } from "@enums/links";
import { LanguageSelector } from "@ui-kit/languageSelector";

export const Header = () => {
  return (
    <div>
      <img src={Links.logo} alt="" />
      <LanguageSelector />
    </div>
  );
};
