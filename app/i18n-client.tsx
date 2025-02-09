"use client"

import { I18nextProvider } from "react-i18next"
import i18n from "./i18n"
import type { ReactNode } from "react"

export function I18nProvider({ children }: { children: ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

