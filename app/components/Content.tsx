"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  List,
  ListItem,
  IconButton,
  Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Content({
  title,
  cardContentsKey,
}: {
  title: string;
  cardContentsKey: string;
}) {
  const { t } = useTranslation();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const { width } = useWindowSize();

  const isMobile = width !== undefined && width <= 768;

  const cardContents = t(`${cardContentsKey}.list`, {
    returnObjects: true,
  }) as Array<{
    title: string;
    subtitle?: string;
    link?: string;
    description?: string | Array<string>;
    close: string;
  }>;

  const renderDescription = (description: any) => {
    if (Array.isArray(description)) {
      return (
        <List>
          {description.map((item, index) => (
            <ListItem key={index}>{renderDescription(item)}</ListItem>
          ))}
        </List>
      );
    }
    if (typeof description === "object" && description !== null) {
      return (
        <>
          {Object.entries(description).map(([key, value], index) => (
            <>
              <Typography key={key} variant="h6">
                {key}
              </Typography>
              <List key={key}>
                <ListItem key={index}>{renderDescription(value)}</ListItem>
              </List>
            </>
          ))}
        </>
      );
    }
    return <Typography>{description}</Typography>;
  };

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
            textAlign="center"
          >
            {t(title)}
          </Typography>
          <Grid container spacing={3}>
            {cardContents.map((card, index) => (
              <Grid
                size={
                  cardContents.length > 3
                    ? { xs: 12, sm: 6, md: 4 }
                    : { xs: 12 }
                }
                key={index}
                alignItems="center"
                textAlign="center"
              >
                <Card sx={{ height: "100%" }}>
                  <CardActionArea
                    sx={{ height: "100%" }}
                    onClick={() => setSelectedCard(index)}
                  >
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {card.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="secondary"
                        component="div"
                      >
                        {card.subtitle}
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
          <Dialog
            open={selectedCard !== null}
            onClose={() => setSelectedCard(null)}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>
              {cardContents[selectedCard].title}{" "}
              {cardContents[selectedCard].link && (
                <Tooltip title="Go to source">
                  <IconButton
                    aria-label="delete"
                    onClick={() => window.open(cardContents[selectedCard].link)}
                  >
                    <LaunchIcon />
                  </IconButton>
                </Tooltip>
              )}
            </DialogTitle>
            <DialogContent>
              {renderDescription(cardContents[selectedCard].description)}
            </DialogContent>
            <DialogActions>
              <Button color="secondary" onClick={() => setSelectedCard(null)}>
                {t(`${cardContentsKey}.close`)}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>
    </Container>
  );
}
