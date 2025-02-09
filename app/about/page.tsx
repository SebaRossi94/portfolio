"use client"
import { useTranslation } from "react-i18next"
import { Typography, Container, Box, Link, IconButton, LinearProgress, Grid2 } from "@mui/material"
import { motion } from "framer-motion"
import { Email, LinkedIn, GitHub, SportsSoccer, MusicNote, SportsEsports } from "@mui/icons-material"
import { useWindowSize } from "../hooks/useWindowSize"
import { Grid2X2 } from "lucide-react"

export default function About() {
  const { t } = useTranslation()
  const { width } = useWindowSize()

  const isMobile = width !== undefined && width <= 768

  const socialItems = [
    { icon: <Email />, link: "mailto:seba.rossi.94@gmail.com" },
    { icon: <LinkedIn />, link: "https://www.linkedin.com/in/sebastian-rossi-grad" },
    { icon: <GitHub />, link: "https://github.com/SebaRossi94" },
  ]

  const languages = [
    { name: "Spanish", level: 100, proficiency: t("about.languages.native") },
    { name: "English", level: 80, proficiency: t("about.languages.advanced") },
  ]

  const hobbies = [
    { name: "Soccer", icon: <SportsSoccer /> },
    { name: "Music (Guitar & Piano)", icon: <MusicNote /> },
    { name: "Gaming", icon: <SportsEsports /> },
  ]

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "calc(100vh - 64px)",
        py: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant={isMobile ? "h3" : "h2"} component="h1" gutterBottom>
            {t("about.title")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("about.description")}
          </Typography>

          <Box sx={{ my: 4, display: "flex", justifyContent: "center", gap: 2 }}>
            {socialItems.map((item, index) => (
              <IconButton
                key={index}
                component={Link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: isMobile ? "1.5rem" : "2rem" }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              {t("about.languages.title")}
            </Typography>
            {languages.map((lang, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1">
                  {lang.name}: {lang.proficiency}
                </Typography>
                <LinearProgress variant="determinate" value={lang.level} sx={{ height: 8, borderRadius: 4 }} />
              </Box>
            ))}
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              {t("about.hobbies")}
            </Typography>
            <Grid2 container spacing={2} justifyContent={"center"}>
              {hobbies.map((hobby, index) => (
                <Grid2 item key={index} xs={4} sm={3} md={2}>
                  <Box sx={{ textAlign: "center" }}>
                    <IconButton sx={{ fontSize: isMobile ? "1.5rem" : "2rem" }}>{hobby.icon}</IconButton>
                    <Typography variant="body2">{hobby.name}</Typography>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </motion.div>
      </Box>
    </Container>
  )
}

