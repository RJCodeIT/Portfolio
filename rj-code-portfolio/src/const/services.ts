import { useTranslation } from "react-i18next";
export interface Service {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  caption: string;
}

export function useServices(): Service[] {
  const { t } = useTranslation("services");

  return [
    {
      icon: "/reactBlack.svg",
      title: t("services.0.title"),
      description: t("services.0.description"),
      benefits: [
        t("services.0.benefits.0"),
        t("services.0.benefits.1"),
        t("services.0.benefits.2")
      ],
      caption: t("services.0.caption")
    },
    {
      icon: "/code.svg",
      title: t("services.1.title"),
      description: t("services.1.description"),
      benefits: [
        t("services.1.benefits.0"),
        t("services.1.benefits.1"),
        t("services.1.benefits.2")
      ],
      caption: t("services.1.caption")
    },
    {
      icon: "/mobile.svg",
      title: t("services.2.title"),
      description: t("services.2.description"),
      benefits: [
        t("services.2.benefits.0"),
        t("services.2.benefits.1"),
        t("services.2.benefits.2")
      ],
      caption: t("services.2.caption")
    },
    {
      icon: "/plug.svg",
      title: t("services.3.title"),
      description: t("services.3.description"),
      benefits: [
        t("services.3.benefits.0"),
        t("services.3.benefits.1"),
        t("services.3.benefits.2")
      ],
      caption: t("services.3.caption")
    }
  ];
}
