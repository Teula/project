import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  Button,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Chip,
  Grid,
  Collapse,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import { useSession } from "next-auth/react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import styles from "../styles/College.module.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
import SchoolIcon from "@mui/icons-material/School";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CourseCard(props) {
  const { data: session, status } = useSession();
  const { course } = props;
  console.log(course);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const adminDelete = () => {
    props.handleDelete(course.id);
  };
  // const customIcons = {
  //   1: {
  //     icon: <SentimentVeryDissatisfiedIcon color='error' sx={{ fontSize: 30 }} />,
  //     label: "Very Dissatisfied",
  //   },
  //   2: {
  //     icon: (
  //       <SentimentDissatisfiedIcon
  //         color='error'
  //         sx={{ fontSize: 30 }}
  //         // sx={{ marginLeft: 3 }}
  //       />
  //     ),
  //     label: "Dissatisfied",
  //   },
  //   3: {
  //     icon: (
  //       <SentimentSatisfiedIcon
  //         color='warning'
  //         sx={{ fontSize: 30 }}
  //         // sx={{ marginLeft: 3 }}
  //       />
  //     ),
  //     label: "Neutral",
  //   },
  //   4: {
  //     icon: (
  //       <SentimentSatisfiedAltIcon
  //         color='success'
  //         // fontSize='40px'
  //         sx={{ fontSize: 30 }}
  //         // sx={{ marginLeft: 3 }}
  //       />
  //     ),
  //     label: "Satisfied",
  //   },
  //   5: {
  //     icon: (
  //       <SentimentVerySatisfiedIcon
  //         color='success'
  //         // fontSize='large'
  //         sx={{ fontSize: 30 }}
  //       />
  //     ),
  //     label: "Very Satisfied",
  //   },
  // };
  return (
    <div>
      <Card sx={{ maxWidth: 345, minHeight: 141 }}>
        {/* <CardMedia
          component='img'
          height='140'
          image=''
          alt='green iguana'
        /> */}
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            <Grid container spacing={0.5}>
              <Grid item xs={10} sx={{ fontSize: 18 }}>
                {course.name}
              </Grid>
              <Grid item xs={2}>
                <Chip
                  label={course.code}
                  variant='outlined'
                  color='secondary'
                  size='meduim'
                  sx={{ fontSize: 9 }}
                />
              </Grid>
            </Grid>
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            <Grid container spacing={2}>
              {course.majors.map((m) => (
                <Grid item xs={3} key={m.tag}>
                  <Tooltip key={m.tag} title={m.name}>
                    <Chip
                      label={m.tag}
                      key={m.tag}
                      color='info'
                      size='small'
                      icon={<SchoolIcon />}
                      sx={{ fontSize: 10 }}
                    />
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions> */}
        {/* ///////////////////////////////////////// */}
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography>
              {course.prerequisites.map((p) => (
                <Grid key={props.course.id} container spacing={0.5}>
                  <Grid key={props.course.id} item xs={8}>
                    {p.name}
                  </Grid>
                  <Grid key={props.course.id} item xs={2}>
                    <Chip
                      key={props.course.id}
                      label={props.course.id}
                      variant='outlined'
                      color='secondary'
                      size='small'
                    />
                  </Grid>
                </Grid>
              ))}
            </Typography>
          </CardContent>
        </Collapse>
        {/* <Accordion style={{ width: 400 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'>
            <div>Pre-Requisites</div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Greetings of the day :)</Typography>
          </AccordionDetails>
        </Accordion> */}
      </Card>
      {/* {session && session.user.isAdmin == true && (
        <DeleteIcon onClick={adminDelete}></DeleteIcon>
      )} */}
      <div className={styles.adminDelete}>
        <div className={styles.chatCount}>
          <SentimentVerySatisfiedIcon
            color='success'
            // fontSize='large'
            sx={{ fontSize: 18 }}
          />

          <p className={styles.numberOfChat}>1</p>
          <p className={styles.numberOfChat}>/5</p>
        </div>

        <div className={styles.chatCount}>
          <ChatBubbleOutlineIcon
            sx={{
              cursor: "pointer",
              color: "#0294d8",
              fontSize: 18,
            }}
          />
          <p className={styles.numberOfChat}>1</p>
        </div>
        {session && session.user.isAdmin == true && (
          <DeleteForeverOutlinedIcon
            onClick={adminDelete}
            sx={{
              cursor: "pointer",
              color: "#bf0010",
              fontSize: 20,
            }}
          />
        )}
      </div>
    </div>
  );
}

{
  /*
                <Grid item xs={10}>
                  Database 1
                </Grid>
                <Grid item xs={2}>
                  <Chip
                    label='4321'
                    variant='outlined'
                    color='secondary'
                    size='small'
                  />
                </Grid> */
}
