"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicyContent() {
  const { t } = useTranslation("privacyPolicy");

  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  // Load from localStorage (only client)
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") {
      setAnalyticsEnabled(true);
    }
  }, []);

  const toggleAnalytics = useCallback(() => {
    const newValue = !analyticsEnabled;
    setAnalyticsEnabled(newValue);
    localStorage.setItem("cookieConsent", newValue ? "accepted" : "declined");
  }, [analyticsEnabled]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 mt-12">
          {t("title")}
        </h1>

        {/* --- Sections --- */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {t("sections.general.title")}
          </h2>
          <p>{t("sections.general.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {t("sections.administrator.title")}
          </h2>
          <p>{t("sections.administrator.content")}</p>
        </section>

        {/* ---------------- COOKIES ---------------- */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {t("sections.cookies.title")}
          </h2>

          <p className="mb-4">{t("sections.cookies.intro")}</p>

          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <strong>{t("sections.cookies.types.necessary.title")}</strong> –{" "}
              {t("sections.cookies.types.necessary.description")}
            </li>
            <li>
              <strong>{t("sections.cookies.types.analytics.title")}</strong> –{" "}
              {t("sections.cookies.types.analytics.description")}
            </li>
          </ul>

          {/* Cookie preferences */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              {t("sections.cookies.preferences.title")}
            </h3>

            <div className="border border-gray-700/50 backdrop-blur-sm bg-gray-900/30 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">
                    {t("sections.cookies.preferences.analytics.title")}
                  </p>
                  <p className="text-sm text-gray-400">
                    {t("sections.cookies.preferences.analytics.description")}
                  </p>
                </div>

                {/* Modern toggle */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={analyticsEnabled}
                    onChange={toggleAnalytics}
                  />
                  <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all">
                    <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-full" />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- RIGHTS ---------------- */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {t("sections.rights.title")}
          </h2>
          <p className="mb-4">{t("sections.rights.intro")}</p>

          <ul className="list-disc list-inside space-y-2">
            {(
              t("sections.rights.list", { returnObjects: true }) as string[]
            ).map((right, index) => (
              <li key={index}>{right}</li>
            ))}
          </ul>
        </section>

        {/* REST */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {t("sections.contact.title")}
          </h2>
          <p>{t("sections.contact.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {t("sections.changes.title")}
          </h2>
          <p>{t("sections.changes.content")}</p>
        </section>
      </div>
    </div>
  );
}
