// import React from "react";
// import Grid from "@mui/material/Grid";
// import {
//   Avatar,
//   Chip,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   IconButton,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// export default function Comment(props) {
//   // const tags = props.tags.map((tag) => <Chip label={tag} color='primary' />);
//   return (
//     <div>
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <div>
//             {/* <Avatar alt='Remy Sharp' src={props.pic} /> <br />
//             {tags} */}
//           </div>
//         </Grid>
//         <Grid item xs={6}>
//           <p>Grade:</p>
//           <p>Online:</p>
//         </Grid>
//         <Grid item xs={12}>
//           <p>
//             Lorem Ipsum has been the industry's standard dummy text ever since
//             the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s
//             with the release of Letraset sheets containing Lorem Ipsum passages,
//             and more recently with desktop publishing software like Aldus
//             PageMaker including versions of Lorem Ipsum.
//           </p>
//         </Grid>
//         <Grid item xs={4}>
//           <IconButton aria-label='delete'>
//             <DeleteIcon />
//           </IconButton>
//         </Grid>
//       </Grid>

//       <Divider />
//     </div>
//   );
// }

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

import SchoolIcon from "@mui/icons-material/School";
import CourseCard from "./CourseCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../styles/College.module.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { set } from "mongoose";
import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Switch from "@mui/material/Switch";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];
export default function Comment(props) {
  const { data: session, status } = useSession();
  console.log("currentU", props.currentUser);
  const isMounted = useRef(false);
  // const tags = props.tags.map((tag) => <Chip label={tag} color='primary' />);
  const [userLike, setUserlike] = useState(0);
  const [userDislike, setUserDislike] = useState(0);
  const [likes, setLikes] = useState(props.likes.length);
  const [dislikes, setDislikes] = useState(props.dislikes.length);
  const [disablelike, setDisablelike] = useState(() => {
    if (props.currentUser) {
      const likefound = props.likes.indexOf(props.currentUser) > -1;
      console.log("l", likefound);
      if (likefound) {
        return true;
      }
    }
  });
  const [disableDislike, setDisabledislike] = useState(() => {
    if (props.currentUser) {
      console.log("true sess");

      const dislikefound = props.dislikes.indexOf(props.currentUser) > -1;

      console.log("d", dislikefound);
      if (dislikefound) {
        return true;
      }
    }
  });

  if (session) {
    // console.log("test", session.user._id);
    const Uid = session.user._id;
    // const likefound = props.likes.indexOf(Uid) > -1;
    // console.log("found", likefound);
  }

  const handleRating = async () => {
    // const data = await fetch(`http://localhost:3000/api/comment/${props.id}`, {
    //   method: "POST",
    //   body: JSON.stringify({ userLike, userDislike, Uid }),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // });
    // const getData = await fetch(
    //   `http://localhost:3000/api/comment/${props.id}`,
    //   {
    //     method: "GET",
    //   }
    // );
    // let cdata = await getData.json();
    // console.log("cdata", cdata.comment.dislikes);
    // if (session) {
    //   const Uid = session.user._id;
    //   const likefound = cdata.comment.likes.indexOf(Uid) > -1;
    //   console.log("l", likefound);
    //   if (likefound) {
    //     setDisablelike(true);
    //   }
    // }
    // if (session) {
    //   const Uid = session.user._id;
    //   const dislikefound = cdata.comment.dislikes.indexOf(Uid) > -1;
    //   console.log("d", dislikefound);
    //   if (dislikefound) {
    //     setDisabledislike(true);
    //   }
    // }
  };

  // if (session) {
  //   const Uid = session.user._id;
  //   const likefound = props.likes.indexOf(Uid) > -1;

  //   if (likefound) {
  //     console.log("foundee", likefound);
  //     setDisablelike(true);
  //   }
  // }

  // if (props.likes.indexOf(session.user._id) > -1) {
  //   console.log("yes fond");
  //   // setDisablelike(true);
  // }
  const checkLike = () => {
    if (session) {
      const Uid = session.user._id;
      const likefound = props.likes.indexOf(Uid) > -1;
      console.log("l", likefound);
      if (likefound) {
        setDisablelike(true);
      }
    }
  };
  const checkDislike = () => {
    if (session) {
      const Uid = session.user._id;

      const dislikefound = props.dislikes.indexOf(Uid) > -1;

      console.log("d", dislikefound);
      if (dislikefound) {
        setDisabledislike(true);
      }
    }
  };

  // useEffect(() => {
  //   if (isMounted.current) {
  //     handleRating();
  //   } else {
  //     isMounted.current = true;
  //   }
  // }, [data]);

  ///////////////////

  //   // checkDislike();
  //   console.log("it ran");
  // });
  // useEffect(() => {
  //   if (isMounted.current) {
  //     handleRating();
  //     console.log("teeeeeest");
  //   } else {
  //     isMounted.current = true;
  //   }
  // }, [userLike]);
  /////////////////
  // useEffect(() => {
  //   if (isMounted.current) {
  //     handleRating();
  //   } else {
  //     isMounted.current = true;
  //   }
  // }, [userDislike]);

  // const likes1 = likes;
  // const dislikes1 = dislikes;

  // useEffect(() => {
  //   if (session) {
  //     const Uid = session.user._id;
  //     const likefound = props.likes.indexOf(Uid) > -1;
  //     console.log("l", likefound);
  //     if (likefound) {
  //       setDisablelike(true);
  //     }
  //   }
  //   if (session) {
  //     const Uid = session.user._id;

  //     const dislikefound = props.dislikes.indexOf(Uid) > -1;

  //     console.log("d", dislikefound);
  //     if (dislikefound) {
  //       setDisabledislike(true);
  //     }
  //   }
  //   console.log("hello");
  // }, []);

  const handleLike = (event) => {
    if (event.target.value === "like") {
      if (disableDislike == true) {
        setDislikes(dislikes - 1);
      }
      setDisablelike(true);
      setDisabledislike(false);
      setLikes(likes + 1);
      setUserDislike(0);
      setUserlike(1);
      props.getlike(props.id);

      // handleRating();
    }
    if (event.target.value === "dislike") {
      if (disablelike == true) {
        setLikes(likes - 1);
      }
      setDisablelike(false);
      setDisabledislike(true);
      setDislikes(dislikes + 1);
      setUserlike(0);
      setUserDislike(1);
      props.getdislike(props.id);
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className={styles.commentsSpace}>
        <div className={styles.commentCard}>
          <div className={styles.firstColumn}>
            {/* <div className={styles.logoComment}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpP7PYm0K-7e3kXOK8U6F3pgSpDMkfWtU4g&usqp=CAU"></img>
              </div> */}
            <div className={styles.qu}>
              <div className={styles.quality}>QUALITY</div>
              <div className={styles.commentRate}>40</div>
            </div>
            <div className={styles.qu}>
              <div className={styles.difficulty}>DIFFICULTY</div>
              <div className={styles.commentRate}>40</div>
            </div>
          </div>
          <div className={styles.secondColumn}>
            <div className={styles.firstRowComment}>
              <div className={styles.infoComment}>
                <div className={styles.infoCom}>Grade</div>
                <div className={styles.infoCom}>online</div>
              </div>
              {/* <div className={styles.commentDate}>
                  12-12-2022
                </div> */}
            </div>
            <div className={styles.commentTags}>
              <div className={styles.tags}>
                <Tooltip title=''>
                  <Chip
                    label=''
                    color='info'
                    size='small'
                    icon={<SchoolIcon />}
                  />
                </Tooltip>
              </div>
              <div className={styles.tags}>
                <Tooltip title=''>
                  <Chip
                    label=''
                    color='info'
                    size='small'
                    icon={<SchoolIcon />}
                  />
                </Tooltip>
              </div>
              <div className={styles.tags}>
                <Tooltip title=''>
                  <Chip
                    label=''
                    color='info'
                    size='small'
                    icon={<SchoolIcon />}
                  />
                </Tooltip>
              </div>
              <div className={styles.tags}>
                <Tooltip title=''>
                  <Chip
                    label=''
                    color='info'
                    size='small'
                    icon={<SchoolIcon />}
                  />
                </Tooltip>
              </div>
            </div>
            <div className={styles.commentBox}> {props.text}</div>
            {/* <div className={styles.commentBox}>
              {" "}
              sadfdssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcsavdsafdsfvaadcs
            </div> */}
            {/* <div className={styles.commentBox}>
              {" "}
              sadfdssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcsavdsafdsfvaadcs
            </div> */}
            {/* <div className={styles.commentBox}> sadfdssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcsavdsafdsfvaadcs</div> */}
            {/* <div className={styles.commentBox}> sadfdssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcsavdsafdsfvaadcs</div> */}
            {/* <div className={styles.btn1}></div>
              <div className={styles.btn2}></div> */}
            <div className={styles.commentLastRow}>
              {/* <Button
                variant='outlined'
                startIcon={
                  <ThumbDownOffAltIcon
                    onClick={handleLike}
                    sx={{ fontSize: 18, zIndex: 1 }}
                  />
                }
                onClick={handleLike}
                disabled={disableDislike}
                value='dislike'
                aria-label='fingerprint'
                color='error'
                sx={{ fontSize: 15, zIndex: 3 }}>
                {dislikes}
              </Button> */}
              <div>
                <IconButton
                  onClick={handleLike}
                  disabled={disableDislike}
                  value='dislike'
                  aria-label='fingerprint'
                  color='error'
                  sx={{ fontSize: 15 }}>
                  {dislikes}
                  <ThumbDownOffAltIcon sx={{ fontSize: 18 }} />
                </IconButton>

                <IconButton
                  disabled={disablelike}
                  onClick={handleLike}
                  value='like'
                  aria-label='fingerprint'
                  color='success'
                  sx={{ fontSize: 15, zIndex: 2 }}>
                  {likes}
                  <ThumbUpOffAltIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </div>
              <Box
                sx={{
                  transform: "translateZ(0px)",
                  flexGrow: 1,
                }}>
                <Box
                  sx={{
                    position: "relative",
                    mt: 3,
                    marginTop: 0,
                  }}>
                  <StyledSpeedDial
                    ariaLabel='SpeedDial playground example'
                    icon={<SpeedDialIcon sx={{ lineHeight: 3.7 }} />}
                    direction='left'>
                    {actions.map((action) => (
                      <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                      />
                    ))}
                  </StyledSpeedDial>
                </Box>
              </Box>
            </div>
          </div>
        </div>
        {/* <div className={styles.commentCard}>
            <div className={styles.logoComment}>Logo</div>
            <div className={styles.infoComment}>
              <div>Grade</div>
              <div>online</div>
            </div>
            <div className={styles.commentBox}>sadfdssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcsavdsafdsfvaadcs</div>
            <div className={styles.btn1}></div>
            <div className={styles.btn2}></div>
          </div> */}
      </div>
    </div>
  );
}
