"use client"

import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{t("about.title")}</h2>
      <p className="mb-4">{t("about.description")}</p>
      <div className="space-y-2">
        <p>
          <strong>{t("about.location")}:</strong> La Plata, Buenos Aires, Argentina
        </p>
        <p>
          <strong>Email:</strong> [Your email here]
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="#" className="text-blue-600 hover:underline">
            [Your LinkedIn URL]
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="#" className="text-blue-600 hover:underline">
            [Your GitHub URL]
          </a>
        </p>
      </div>
    </section>
  )
}

