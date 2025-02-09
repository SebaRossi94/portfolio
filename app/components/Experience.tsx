"use client"

import { useTranslation } from "react-i18next"

export default function Experience() {
  const { t } = useTranslation()

  const experiences = [
    {
      company: "Magoya",
      position: t("experience.magoya.position"),
      period: t("experience.magoya.period"),
      details: t("experience.magoya.details", { returnObjects: true }),
    },
    {
      company: "Cultivio",
      position: t("experience.cultivio.position"),
      period: t("experience.cultivio.period"),
      details: t("experience.cultivio.details", { returnObjects: true }),
    },
    {
      company: "Fullstack Labs",
      position: t("experience.fullstackLabs.position"),
      period: t("experience.fullstackLabs.period"),
      details: t("experience.fullstackLabs.details", { returnObjects: true }),
    },
    {
      company: "Rocstar/SYT",
      position: t("experience.rocstarSYT.position"),
      period: t("experience.rocstarSYT.period"),
      details: t("experience.rocstarSYT.details", { returnObjects: true }),
    },
  ]

  return (
    <section id="experience" className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{t("experience.title")}</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.company}</h3>
          <p className="text-gray-600">
            {exp.position} | {exp.period}
          </p>
          <ul className="list-disc list-inside mt-2">
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

