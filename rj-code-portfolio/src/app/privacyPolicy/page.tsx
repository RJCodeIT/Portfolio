"use client";

import dynamic from "next/dynamic";

const PrivacyPolicyContent = dynamic(
  () => import("./PrivacyPolicyContent"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center text-gray-300">
        <div className="animate-pulse text-xl">Loading...</div>
      </div>
    ),
  }
);

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
