"use client"
import { useTranslation } from "react-i18next"
import { Box, Typography } from "@mui/material"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        &copy; 2023 Sebastian Pablo Rossi Grad. {t("footer.rights")}
      </Typography>
    </Box>
  )
}

