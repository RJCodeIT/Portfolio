import { useTranslation } from "react-i18next";

export interface HowWeWorkStep {
  stepNumber: number;
  icon: string;
  title: string;
  content: string;
}

export function useHowWeWorkItems(): HowWeWorkStep[] {
  const { t } = useTranslation("howWeWork");

  return [
    {
      stepNumber: 1,
      icon: "💬",
      title: t("steps.0.title"),
      content: t("steps.0.content"),
    },
    {
      stepNumber: 2,
      icon: "🛠️",
      title: t("steps.1.title"),
      content: t("steps.1.content"),
    },
    {
      stepNumber: 3,
      icon: "💻",
      title: t("steps.2.title"),
      content: t("steps.2.content"),
    },
    {
      stepNumber: 4,
      icon: "✅",
      title: t("steps.3.title"),
      content: t("steps.3.content"),
    },
  ];
}
