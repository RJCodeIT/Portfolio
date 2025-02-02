import { useTranslation } from "react-i18next";

export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export function useReviews(): Review[] {
  const { t } = useTranslation("reviews");

  return [
    {
      id: 1,
      name: t("reviews.0.name"),
      role: t("reviews.0.role"),
      content: t("reviews.0.content"),
      rating: 5
    },
    {
      id: 2,
      name: t("reviews.1.name"),
      role: t("reviews.1.role"),
      content: t("reviews.1.content"),
      rating: 5
    },
    {
      id: 3,
      name: t("reviews.2.name"),
      role: t("reviews.2.role"),
      content: t("reviews.2.content"),
      rating: 5
    },
    {
      id: 4,
      name: t("reviews.3.name"),
      role: t("reviews.3.role"),
      content: t("reviews.3.content"),
      rating: 5
    }
  ];
}
