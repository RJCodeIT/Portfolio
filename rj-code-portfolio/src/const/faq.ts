import { useTranslation } from "react-i18next";

export interface FAQItem {
  question: string;
  answer: string;
  preserveWhitespace?: boolean;
}

export function useFaqData(): FAQItem[] {
  const { t } = useTranslation("faq");

  return t("faqItems", { returnObjects: true }) as FAQItem[];
}
