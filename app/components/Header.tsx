"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Box } from "@mui/material"
import { Language, Menu as MenuIcon } from "@mui/icons-material"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useWindowSize } from "../hooks/useWindowSize"

export default function Header() {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const { width } = useWindowSize()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const isMobile = width !== undefined && width <= 768

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    handleClose()
  }

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }
    setDrawerOpen(open)
  }

  const menuItems = [
    { text: t("nav.home"), path: "/" },
    { text: t("nav.about"), path: "/about" },
    { text: t("nav.experience"), path: "/experience" },
    { text: t("nav.education"), path: "/education" },
    { text: t("nav.courses"), path: "/courses" },
    { text: t("nav.stack"), path: "/stack" },
  ]

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} onClick={() => router.push(item.path)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </>
        ) : (
          <>
            <Link href="/" style={{ color: "inherit", textDecoration: "none", flexGrow: 1 }}>
              Sebastian Pablo Rossi Grad
            </Link>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {menuItems.slice(1).map((item, index) => (
                <MenuItem key={index} onClick={() => router.push(item.path)}>
                  {item.text}
                </MenuItem>
              ))}
            </Box>
          </>
        )}
        <IconButton color="inherit" onClick={handleMenu} sx={{ ml: "auto" }}>
          <Language />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
          <MenuItem onClick={() => changeLanguage("es")}>Español</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

