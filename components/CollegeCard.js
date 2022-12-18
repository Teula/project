import Link from "next/link";
import styles from "../styles/College.module.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EngineeringIcon from "@mui/icons-material/Engineering";
import RemoveIcon from "@mui/icons-material/Remove";
import SchoolIcon from "@mui/icons-material/School";

import React from "react";

export default function CollegeCard(props) {
  const theme = useTheme();
  return (
    <div>
      <Card
        className={styles.collegesCard}
        sx={{
          display: "flex",
          minWidth: 1550,
          maxWidth: 1550,
          minHeight: 150,
          zIndex: 1,
          cursor: "pointer",
        }}>
        <CardMedia
          component='img'
          sx={{ maxWidth: 500, zIndex: 2 }}
          image='https://images.unsplash.com/photo-1504127781795-9ea768109143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='Live from space album cover'
        />
        <Box sx={{ display: "flex", marginLeft: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              justifyItems: "center",
              maxWidth: 565,
              minWidth: 565,
              paddingBottom: 8,
            }}>
            <SchoolIcon
              color='primary'
              sx={{ fontSize: 50, marginLeft: "50%", marginBottom: 3 }}
            />
            <Link href={`http://localhost:3000/college/${props.c._id}`}>
              <Typography component='div' variant='h3' sx={{}}>
                {props.c.name}
              </Typography>
            </Link>
          </Box>
          {/* <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'>
              Majors:
            </Typography> */}

          {/* <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}> */}
          {/* <Grid item xs={12} md={6}> */}

          {/* </Grid> */}
          {/* </Box> */}
          <Box sx={{ marginLeft: 5 }}>
            {/* <Typography variant='h5' color='text.secondary' component='div'>
              Majors:
            </Typography> */}
            <List
              sx={{
                paddingTop: 10,
                // marginLeft: 1,
                width: 250,
                // maxWidth: 860,

                bgcolor: "background.paper",
                background: "inherit",
              }}>
              {props.c.majors.map((c) => (
                <ListItem key={c} disableGutters>
                  {/* <RemoveIcon /> */}
                  <ListItemText
                    // sx={{ fontSize: 20 }}
                    primary={`${c.tag} / ${c.name}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Card>
    </div>
  );
}
