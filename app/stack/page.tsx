"use client"
import { useTranslation } from "react-i18next"
import { Typography, Container, Box, Card, CardContent, Grid } from "@mui/material"
import { motion } from "framer-motion"
import { useWindowSize } from "../hooks/useWindowSize"

export default function Stack() {
  const { t } = useTranslation()
  const { width } = useWindowSize()

  const isMobile = width !== undefined && width <= 768

  const stack = t("stack.tools", { returnObjects: true }) as Record<string, string[]>

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant={isMobile ? "h3" : "h2"} component="h1" gutterBottom textAlign="center">
            {t("stack.title")}
          </Typography>
          {Object.entries(stack).map(([category, tools]) => (
            <Box key={category} sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom textAlign="center">
                {category}
              </Typography>
              <Grid container spacing={2}>
                {tools.map((tool, index) => (
                  <Grid item xs={6} sm={4} md={3} key={index}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Card>
                        <CardContent>
                          <Typography variant="body1" align="center">
                            {tool}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </motion.div>
      </Box>
    </Container>
  )
}

