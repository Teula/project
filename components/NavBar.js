import React from "react";
import styles from "../styles/College.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useSession } from "next-auth/react";
import LoginBtn from "./LoginBtn";
import Link from "next/link";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

export default function NavBar() {
  const { data: session, status } = useSession();
  let pages = [
    <Link href='/'>Home</Link>,
    <Link href='/college'>Colleges</Link>,
  ];
  let settings = ["Login", "Register"];
  if (session) {
    settings = [
      session.user.email,
      <Link href='/profile'>Profile</Link>,
      <LoginBtn />,
    ];
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar sx={{ bgcolor: "#7e5dc0", minWidth: "100%" }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <ImportContactsIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "#ff589e",
              }}
            />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#ff589e",
                textDecoration: "none",
              }}>
              PMU
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'>
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant='h5'
              noWrap
              component='a'
              href=''
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  {page}
                </Button>
              ))}
            </Box>
            {status == "authenticated" && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={session.user.email.toLocaleUpperCase()}
                      src='/static/images/avatar/2.jpg'
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}>
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
            {status == "unauthenticated" && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Log in'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {/* <Avatar
                      alt='Remy Sharp'
                      src='/static/images/avatar/2.jpg'
                    /> */}
                    <LoginBtn />
                  </IconButton>
                </Tooltip>
                {/* <Menu
                  sx={{ mt: "45px" }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}>
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu> */}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* <nav className={styles.navBar}>
        <div className={styles.navLogo}>
           <img src='data:image/jpeg;base64,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'></img>
        </div>
        <div className={styles.navInfo}>
          <div className={styles.navTabs}>
            <a className={styles.navHome}>Home</a>
            <div className={styles.navSubList}>
              <a className={styles.navCol}>College</a>
              <div className={styles.navSub}>Instructor</div>
              <div className={styles.navSub}>Courses</div>
            </div>
          </div>
          <div className={styles.navUser}>
            <div className={styles.navUserLogo}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpP7PYm0K-7e3kXOK8U6F3pgSpDMkfWtU4g&usqp=CAU'></img>
            </div>
            <div className={styles.navSign}>Sign In</div>
          </div>
        </div>
      </nav> */}
    </div>
  );
}
