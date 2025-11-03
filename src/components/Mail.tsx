import { useLanguage } from "../context/Language";

export const usePortfolioMailToLink = () => {
  const { t } = useLanguage();
  
  const getPortfolioMailToLink = () => {
    const to = "sebastians201991@gmail.com";
    const subject = t?.("email.emailSubject");
    const body = t?.("email.emailBody");

    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return getPortfolioMailToLink;
};

export const mailTo = () => {
  const { t } = useLanguage();

  return `mailto:sebastian@example.com?subject=${encodeURIComponent(
    t("contact.mailto.subjectPrefix") + " - " + (t("contact.form.placeholders.projectTypeFallback"))
  )}&body=${encodeURIComponent(
    t("contact.mailto.template")
  )}`;
};