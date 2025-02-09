"use client";
import { useTranslation } from "react-i18next";
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Grid2,
} from "@mui/material";
import { motion } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Education() {
  const { t } = useTranslation();
  const { width } = useWindowSize();

  const isMobile = width !== undefined && width <= 768;

  const educations = [
    {
      degree: "Electronic Engineering",
      institution:
        "Universidad Nacional de La Plata (UNLP), La Plata, Buenos Aires, Argentina",
      period: "2013 - 2018",
      score: "Score",
      scoreValue: "7,85",
    },
    {
      degree: "First Certificate - B2",
      institution:
        "University of Cambridge ESOL",
      score: "Score",
      scoreValue: "C",
    },
  ] as Array<{
    degree: string;
    institution: string;
    period: string;
    score: string;
    scoreValue: string;
  }>;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h1"
            gutterBottom
          >
            {t("education.title")}
          </Typography>
          <Grid2 spacing={2} container direction={"column"}>
            {educations.map((education, index) => (
              <Card key={index}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {education.degree}
                  </Typography>
                  <Typography color="text.secondary">
                    {education.institution}
                  </Typography>
                  <Typography variant="body2">{education.period}</Typography>
                  <Typography variant="body2">{education.score} - {education.scoreValue}</Typography>
                </CardContent>
              </Card>
            ))}
          </Grid2>
        </motion.div>
      </Box>
    </Container>
  );
}
