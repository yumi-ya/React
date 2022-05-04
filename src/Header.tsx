// import React from 'react';
import menu from "./imgs/icon.svg";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import ConnectedTvOutlinedIcon from "@mui/icons-material/ConnectedTvOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import CurrencyYenOutlinedIcon from "@mui/icons-material/CurrencyYenOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

const drawerWidth = 240;

const styles = {
  logo: {
    display: "flex",
    alignItems: "center",
    // justfyContent: "flex-start",
    margin: "5px",
    width: "50px"
  },
  nav: {
    display: "flex",
    height: "80px",
    width: "100%",
    bgcolor: "#FA8B61",
    justifyContent: "space-between"
  },
  header__logoWord: {
    fontSize: "20px"
  },
  // header__menuList: {
  //   display: "flex",
  //   width: "100%",
  //   height: "100%",
  //   fontSize: "16px",
  //   listStyle: "none",
  //   bgColor: "pink",
  //   "@media screen and (maxWidth: 800px)": {
  //     display: "none"
  //   }
  //   //   header__menuList + header__menuList: {
  //   //     ml: '10px'
  // },
  // header__menuItem: {
  //   display: "blok",
  //   paddingY: "10px",
  //   marginY: "15px",
  //   "@media screen and (maxWidth: 800px)": {
  //     display: "none"
  //   }
  // },
  inbox: {
    bgcolor: "#F5B55A",
    "&:hover": {
      bgcolor: "#FAE134"
    }
    // "&:active": {
    //   bgcolor: "#FAE134"
    // },
  },
  mail: {
    bgcolor: "#96EB79",
    "&:hover": {
      bgcolor: "#61D49A"
    }
  },
  hamburger: {
    display: "none",
    "@media (max-width: 800px)": {
      display: "block",
      fontSize: "30px"
    }
  },
  twitter: {
    display: "block",
    color: "#1da1f2",
    marginTop: "15px"
  }
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  })
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start"
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={styles.nav}>
          <img src={menu} alt="" style={styles.logo} />
          <Typography variant="h4" noWrap sx={{}} component="div">
            <h2 style={styles.header__logoWord}>YagiWorks</h2>
            {/* <ul style={styles.header__menuList}>
              <li style={styles.header__menuItem}>制作物</li>
              <li style={styles.header__menuItem}>スキル</li>
              <li style={styles.header__menuItem}>自己紹介</li>
              <li style={styles.header__menuItem}>金額</li>
              <li style={styles.header__menuItem}>FAQ</li>
              <li style={styles.header__menuItem}>お問い合わせ</li>
            </ul> */}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon sx={styles.hamburger} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        {/* <Typography paragraph>
          abc
        </Typography> */}
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth
          }
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["制作物", "スキル"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <ConnectedTvOutlinedIcon />
                ) : (
                  <DoneOutlineOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["金額", "FAQ"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <CurrencyYenOutlinedIcon />
                ) : (
                  <FeedOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["お問い合わせ"].map((text, index) => (
            <ListItem button key={text} sx={styles.mail}>
              <ListItemIcon>
                {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <a href="/" style={styles.twitter}>
            <TwitterIcon sx={{ fontSize: "30px" }} />
          </a>
        </List>
      </Drawer>
    </Box>
  );
}

// const Header : React.VFC = () => {
//   return (
//    <div className="header">
//      <img className="icon" src={menu} alt=""/>
//   <h2>ReactTest</h2>

//   </div>
//   );
// };

// export default Header;
