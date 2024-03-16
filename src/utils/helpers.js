import ls from "local-storage";
import { keys } from "lodash";

export const getLanguage = () => {
  const language = ls("language");
  if (!language) {
    ls.set("language", "fa");
  }
  return language ? language : "fa";
};

export const formatDate = (dateInput, locale) => {
  const date = new Date(dateInput);
  let options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  switch (locale) {
    case "fa":
      locale = "fa-IR";
      options = { ...options, day: "numeric" };
      break;
    case "en":
      locale = "en-GB";
      break;
    default:
      console.warn("Locale not supported, defaulting to English");
      locale = "en-GB";
  }

  return new Intl.DateTimeFormat(locale, options).format(date);
};

export const extractKeyWithValue = (object, value) =>
  keys(object).find((key) => object[key] === value);
