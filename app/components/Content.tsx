"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"
import Grid from '@mui/material/Grid2';
import { motion, AnimatePresence } from "framer-motion"
import { useWindowSize } from "../hooks/useWindowSize"

export default function Content({ title, cardContentsKey }: { title: string, cardContentsKey: string}) {
  const { t } = useTranslation()
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const { width } = useWindowSize()

  const isMobile = width !== undefined && width <= 768

  const cardContents = t(`${cardContentsKey}.list`, { returnObjects: true }) as Array<{ title: string; description: string, close: string }>

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant={isMobile ? "h3" : "h2"} component="h1" gutterBottom>
            {t(title)}
          </Typography>
          <Grid container spacing={3}>
            {cardContents.map((course, index) => (
              <Grid size={{xs: 12, sm: 6,md: 4}}  key={index}>
                <Card>
                  <CardActionArea onClick={() => setSelectedCard(index)}>
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {course.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
      <AnimatePresence>
        {selectedCard !== null && (
          <Dialog open={selectedCard !== null} onClose={() => setSelectedCard(null)} fullWidth maxWidth="sm">
            <DialogTitle>{cardContents[selectedCard].title}</DialogTitle>
            <DialogContent>
              <Typography>{cardContents[selectedCard].description}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedCard(null)}>{t(`${cardContentsKey}.close`)}</Button>
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>
    </Container>
  )
}

