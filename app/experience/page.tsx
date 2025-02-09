"use client"
import { useTranslation } from "react-i18next"
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material"
import { motion } from "framer-motion"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useWindowSize } from "../hooks/useWindowSize"

export default function Experience() {
  const { t } = useTranslation()
  const { width } = useWindowSize()

  const isMobile = width !== undefined && width <= 768

  const experiences = ["magoya", "fullstackLabs", "rocstarSYT"]

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant={isMobile ? "h3" : "h2"} component="h1" gutterBottom>
            {t("experience.title")}
          </Typography>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={{ mb: 2, textAlign: "left" }}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {t(`experience.${exp}.company`)}
                  </Typography>
                  <Typography color="text.secondary">
                    {t(`experience.${exp}.position`)} | {t(`experience.${exp}.period`)}
                  </Typography>
                  {exp === "magoya" && (
                    <Box sx={{ mt: 2 }}>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography>{t("experience.magoya.intent.title")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box component="ul" sx={{ pl: 2, mt: 0 }}>
                            {t("experience.magoya.intent.details", { returnObjects: true }).map(
                              (detail: string, i: number) => (
                                <Typography component="li" key={i}>
                                  {detail}
                                </Typography>
                              ),
                            )}
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography>{t("experience.cultivio.company")}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography color="text.secondary">
                            {t("experience.cultivio.position")} | {t("experience.cultivio.period")}
                          </Typography>
                          <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                            {t("experience.cultivio.details", { returnObjects: true }).map(
                              (detail: string, i: number) => (
                                <Typography component="li" key={i}>
                                  {detail}
                                </Typography>
                              ),
                            )}
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  )}
                  {exp !== "magoya" && (
                    <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                      {t(`experience.${exp}.details`, { returnObjects: true }).map((detail: string, i: number) => (
                        <Typography component="li" key={i}>
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </Container>
  )
}

