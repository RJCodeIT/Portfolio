import { useTranslation } from "react-i18next";
import { HiChatBubbleLeftRight, HiWrench, HiComputerDesktop, HiCheckCircle } from "react-icons/hi2";

export interface HowWeWorkStep {
  stepNumber: number;
  icon: React.ComponentType;
  title: string;
  content: string;
}

export function useHowWeWorkItems(): HowWeWorkStep[] {
  const { t } = useTranslation("howWeWork");

  return [
    {
      stepNumber: 1,
      icon: HiChatBubbleLeftRight,
      title: t("steps.0.title"),
      content: t("steps.0.content"),
    },
    {
      stepNumber: 2,
      icon: HiWrench,
      title: t("steps.1.title"),
      content: t("steps.1.content"),
    },
    {
      stepNumber: 3,
      icon: HiComputerDesktop,
      title: t("steps.2.title"),
      content: t("steps.2.content"),
    },
    {
      stepNumber: 4,
      icon: HiCheckCircle,
      title: t("steps.3.title"),
      content: t("steps.3.content"),
    },
  ];
}
