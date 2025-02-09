"use client"

import { useTranslation } from "react-i18next"
import { Typography, Container, Box } from "@mui/material"
import { motion } from "framer-motion"
import { I18nProvider } from "./i18n-client"
import { useWindowSize } from "./hooks/useWindowSize"

function Home() {
  const { t } = useTranslation()
  const { width } = useWindowSize()

  const isMobile = width !== undefined && width <= 768

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "calc(100vh - 64px)",
        py: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant={isMobile ? "h3" : "h2"} component="h1" gutterBottom>
            {t("home.welcome")}
          </Typography>
          <Typography variant={isMobile ? "h6" : "h5"} component="h2" gutterBottom>
            {t("home.subtitle")}
          </Typography>
        </motion.div>
      </Box>
    </Container>
  )
}

export default function HomePage() {
  return (
    <I18nProvider>
      <Home />
    </I18nProvider>
  )
}

