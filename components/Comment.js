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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import FaceIcon from "@mui/icons-material/Face";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import FlagIcon from "@mui/icons-material/Flag";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import GradingIcon from "@mui/icons-material/Grading";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GradeIcon from "@mui/icons-material/Grade";
import HelpIcon from "@mui/icons-material/Help";
import Textarea from "@mui/joy/Textarea";
import CloseIcon from "@mui/icons-material/Close";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";

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
  console.log("props", props.user);
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
    // const Uid = session.user._id;
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
  let hideName;
  if (props.hide == "Yes") {
    hideName = true;
  } else {
    hideName = false;
  }

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
  const [showedit, setShowedit] = useState(false);
  const [editedComment, setEditedComment] = useState(props.text);
  const notify = () =>
    toast.warn(<Link href='/login'>Log in to like - dislike</Link>, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleLike = (event) => {
    if (!session) {
      notify();
    } else {
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
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let db = new Date(props.created);
  let showSettings = false;
  if (session) {
    if (props.currentUser == props.user[0]._id || session.user.isAdmin) {
      showSettings = true;
    }
  }

  // const userData = props.user.map((u) => {
  //   return (
  //     <div>
  //       {u._id}
  //       {u.email}
  //     </div>
  //   );
  // });
  let page = false;
  if (status == "authenticated" || status == "unauthenticated") {
    page = true;
  }
  return (
    <div>
      {page && (
        <div>
          {" "}
          <ToastContainer />
          {/* {userData} */}
          {/* <h1>
        // if not hidden //
        {props.user[0].name}
        // tags
        {props.user[0].year}
        //dates
        {props.updated}
        {props.created}
        //
        {props.again}
        {props.grade}
        // if to convert
        {props.user[0].gpa}
        {props.user[0].isAdmin}
        // if statment
        {props.user[0].major}
        {props.user[0].campus}
      </h1> */}
          <div className={styles.commentsSpace}>
            <div className={styles.commentCard}>
              <div className={styles.userComment}>
                <Avatar></Avatar>
                <div className={styles.commentName}>
                  {hideName ? "[Hidden Name]" : props.user[0].name}
                  {/* {props.user[0].name} */}
                </div>
                <div className={styles.commentCreated}>
                  {db.getDate()}/{db.getMonth()}/{db.getFullYear()}
                </div>
                <div className={styles.commentCreated}>
                  {props.instructor[0].name}
                </div>
              </div>

              {/* <div className={styles.firstColumn}>
            
            <div className={styles.qu}>
              <div className={styles.quality}>QUALITY</div>
              <div className={styles.commentRate}>40</div>
            </div>
            <div className={styles.qu}>
              <div className={styles.difficulty}>DIFFICULTY</div>
              <div className={styles.commentRate}>40</div>
            </div>
          </div> */}
              <div className={styles.infoComment}>
                <Stack direction='row' spacing={1}>
                  {props.user[0].year && (
                    <Chip
                      icon={<PermContactCalendarIcon />}
                      color='primary'
                      label={props.user[0].year}
                      variant='outlined'
                    />
                  )}

                  {props.user[0].major && (
                    <Chip
                      icon={<SchoolIcon />}
                      color='info'
                      label={props.user[0].major}
                      variant='outlined'
                    />
                  )}

                  {props.user[0].campus && (
                    <Chip
                      icon={<FaceIcon />}
                      color='error'
                      label={props.user[0].campus}
                      variant='outlined'
                    />
                  )}

                  {props.user[0].isAdmin && (
                    <Chip
                      icon={<AdminPanelSettingsIcon />}
                      color='warning'
                      label='Admin'
                    />
                  )}
                  {props.user[0].gpa && (
                    <Chip
                      icon={<GradeIcon />}
                      color='primary'
                      label={`GPA | ${props.user[0].gpa}`}
                    />
                  )}
                  {props.grade && (
                    <Chip
                      icon={<GradingIcon />}
                      color='success'
                      label={`${props.grade} / 4`}
                    />
                  )}

                  <Chip
                    icon={<HelpIcon />}
                    label={`Take again | ${props.again}`}
                  />
                </Stack>
                {/* <div className={styles.infoCom}>{props.user[0].year}</div>

            <div className={styles.infoCom}>{props.user[0].major}</div>
            <div className={styles.infoCom}>{props.user[0].campus}</div> */}

                {/* <div className={styles.infoCom}></div>
                <div className={styles.infoCom}></div> */}
                {/* <div className={styles.infoCom}>No{props.user[0].isAdmin}</div>
            <div className={styles.infoCom}>
              <div className={styles.status}>GPA</div>
              {props.user[0].gpa}
            </div>
            <div className={styles.infoCom}>
              <div className={styles.status}>Grade</div>A+
              {props.grade}
            </div>
            <div className={styles.infoCom}>
              <div className={styles.status}>Take again</div>Yes
              {props.again}
            </div> */}
              </div>
              {/* <div className={styles.commentDate}>
            <div>Updated: 12-11-2222{props.updated}</div>
          </div> */}

              {showedit ? (
                <div className={styles.commentBox}>
                  <Textarea
                    type='text'
                    value={editedComment}
                    onChange={(event) => setEditedComment(event.target.value)}
                    // minRows={7}
                    placeholder='Edit'
                    // style='width: 80%;'
                    sx={{ width: "100%" }}
                  />
                  <Chip
                    icon={<CloseIcon sx={{ fontSize: 18 }} />}
                    onClick={() => setShowedit(false)}
                    color='secondary'
                    label='close'
                    variant='outlined'
                    sx={{ border: 0 }}
                  />
                  <Chip
                    icon={<SendTwoToneIcon sx={{ fontSize: 18 }} />}
                    onClick={() => props.editComment(props.id, editedComment)}
                    color='primary'
                    label='submit'
                    variant='outlined'
                    sx={{ border: 0 }}
                  />
                </div>
              ) : (
                <div type='output' className={styles.commentBox}>
                  {props.text}
                </div>
              )}

              <div>
                {/* <Chip
                  onClick={handleLike}
                  disabled={disableDislike}
                  icon={<ThumbDownOffAltIcon sx={{ fontSize: 18 }} />}
                  label={`${dislikes}`}
                  variant={disableDislike ? "filled" : "outlined"}
                  color='error'
                  value='dislike'
                  sx={{ border: 0 }}
                /> */}

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

                {/* <Chip
                  icon={<SendTwoToneIcon sx={{ fontSize: 18 }} />}
                  onClick={() => props.editComment(props.id, editedComment)}
                  color='primary'
                  label='Likes'
                  variant='outlined'
                  sx={{ border: 0 }}
                /> */}

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

              <div className={styles.IconButtonDER}>
                {showSettings && (
                  <div>
                    <Chip
                      onClick={() => {
                        props.deleteComment(props.id);
                      }}
                      icon={
                        <DeleteIcon sx={{ fontSize: 18, color: pink[500] }} />
                      }
                      label='Delete'
                      variant='outlined'
                      sx={{ border: 0 }}
                    />
                    <Chip
                      onClick={() => {
                        setShowedit(true);
                      }}
                      icon={
                        <EditIcon color='secondary' sx={{ fontSize: 18 }} />
                      }
                      label='Edit'
                      variant='outlined'
                      sx={{ border: 0 }}
                    />
                  </div>
                )}
                {/* 
                <Chip
                  onClick={() => {}}
                  icon={<FlagIcon color='disabled' sx={{ fontSize: 18 }} />}
                  label='Report'
                  variant='outlined'
                  sx={{ border: 0 }}
                /> */}
              </div>
              {/* <div className={styles.secondColumn}>
            <div className={styles.firstRowComment}></div>
            <div className={styles.commentTags}> */}
              {/* <div className={styles.tags}>
                <Tooltip title=''>
                  <Chip
                    label='SE'
                    color='info'
                    size='small'
                    icon={<SchoolIcon />}
                    sx={{ fontSize: 10 }}
                  />
                </Tooltip>
              </div>
              <div className={styles.tags}>
                <Tooltip title=''>
                  <Chip
                    label='CS'
                    color='info'
                    size='small'
                    icon={<SchoolIcon />}
                    sx={{ fontSize: 10 }}
                  />
                </Tooltip>
              </div>
              <div className={styles.tags}>
                <Tooltip title=''>
                  <Chip
                    label='IT'
                    color='info'
                    size='small'
                    icon={<SchoolIcon />}
                    sx={{ fontSize: 10 }}
                  />
                </Tooltip>
              </div>
              <div className={styles.tags}>
                <Tooltip title=''>
                  <Chip
                    label='CE'
                    color='info'
                    size='small'
                    icon={<SchoolIcon />}
                    sx={{ fontSize: 10 }}
                  />
                </Tooltip>
              </div> */}
              {/* </div> */}
              {/* <div className={styles.infoComment1}></div> */}
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
              {/* <div className={styles.commentLastRow}> */}
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
              {/* <Box
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
              </Box> */}
              {/* </div> */}
              {/* </div> */}
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
      )}
    </div>
  );
}
