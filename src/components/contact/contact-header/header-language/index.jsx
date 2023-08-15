import { useTranslation } from "react-i18next";
import { Wrapper } from "./styled-index";

function LanguageHeader({ HandleClick }) {
  const { i18n } = useTranslation();
  const handleLang = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    window.location.reload();
  };
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  return (
    <Wrapper>
      <select onChange={handleLang}>
        {LanguValue() === "ru" ? (
          <>
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="uz">UZ</option>
          </>
        ) : LanguValue() === "uz" ? (
          <>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </>
        ) : LanguValue() === "en" ? (
          <>
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </>
        ) : (
          <>
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="uz">UZ</option>
          </>
        )}
      </select>
    </Wrapper>
  );
}
export default LanguageHeader;
