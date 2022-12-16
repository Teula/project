import React, { useState } from "react";
import Survey from "../../../../../../components/Survey";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import styles from "../../../../../../styles/Survey.module.css";
import Textarea from "@mui/joy/Textarea";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import Done from "@mui/icons-material/Done";
import Typography from "@mui/joy/Typography";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export async function getServerSideProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/college/${context.params.collegeId}/courses`
  );
  const courses = await response.json();
  const response1 = await fetch(
    `http://localhost:3000/api/college/${context.params.collegeId}/instructors`
  );
  const instructors = await response1.json();
  console.log(instructors, courses);

  return {
    props: { courses, instructors }, // will be passed to the page component as props
  };
}

export default function SurveyPage(props) {
  const notify = () =>
    toast.warn(
      <h1>
        <Link href='/login'>Log in</Link> to rate
      </h1>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleChange = (event) => {
    setGrade(event.target.value);
  };

  const StyledRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
      color: theme.palette.action.disabled,
    },
  }));
  const customIcons = {
    1: {
      icon: (
        <SentimentVeryDissatisfiedIcon color='error' sx={{ fontSize: 30 }} />
      ),
      label: "Very Dissatisfied",
    },
    2: {
      icon: (
        <SentimentDissatisfiedIcon
          color='error'
          sx={{ fontSize: 30 }}
          // sx={{ marginLeft: 3 }}
        />
      ),
      label: "Dissatisfied",
    },
    3: {
      icon: (
        <SentimentSatisfiedIcon
          color='warning'
          sx={{ fontSize: 30 }}
          // sx={{ marginLeft: 3 }}
        />
      ),
      label: "Neutral",
    },
    4: {
      icon: (
        <SentimentSatisfiedAltIcon
          color='success'
          // fontSize='40px'
          sx={{ fontSize: 30 }}
          // sx={{ marginLeft: 3 }}
        />
      ),
      label: "Satisfied",
    },
    5: {
      icon: (
        <SentimentVerySatisfiedIcon
          color='success'
          // fontSize='large'
          sx={{ fontSize: 30 }}
        />
      ),
      label: "Very Satisfied",
    },
  };

  function IconContainer(props) {
    const { value, ...other } = props;

    return <span {...other}>{customIcons[value].icon}</span>;
  }

  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  const [comment, setComment] = useState();
  const handleComment = (event) => {
    setComment(event.target.value);
  };
  const [rateOne, setRateOne] = useState(); // late update

  const getV = (event) => {
    setRateOne(event.target.value);
    console.log("tste", rateOne);
  };
  const handleSubmit = async () => {
    console.log("post", comment, session.user);
    const data = await fetch(
      `http://localhost:3000/api/college/${router.query.collegeId}/courses/${router.query.course}`,
      // /api/college/620dfbb23d2d0a1b624131a8/courses/620dfbb23d2d0a1b624131b6
      {
        method: "POST",
        body: JSON.stringify({
          comment,
          session,
          ratePro,
          diffPro,
          takeAgain,
          courseDiff,
          grade,
          hide,
          getIns,
          getCourse,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    router.push(
      `http://localhost:3000/college/${router.query.collegeId}/course/${router.query.course}`
    );
    notify();
  };

  const [again, setAgain] = React.useState("flex-start");
  const [name, setName] = React.useState("flex-start");
  const fillcourses = props.courses.courses.map((c) => {
    return (
      <MenuItem value={c._id} key={c._id}>
        {c.code}/{c.name}
      </MenuItem>
    );
  });
  const fillInstructors = props.instructors.instructors.map((i) => {
    return (
      <MenuItem key={i._id} value={i._id}>
        {i.name}
      </MenuItem>
    );
  });

  // function transform(value) {
  //   return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  // }
  console.log("last", props.courses.courses);
  const [ratePro, setRatePro] = useState();
  const [diffPro, setDiff] = useState();
  const [takeAgain, setTakeAgain] = useState();
  const [courseDiff, setCourseDiff] = useState();
  const [grade, setGrade] = useState();
  const [hide, setHide] = useState();

  //ins course
  const [getCourse, setGetCourse] = useState();
  const [getIns, setGetins] = useState();
  console.log("c", getCourse);
  return (
    <div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      {/* <Survey /> */}
      {session && (
        <div>
          <div className={styles.surveyGrid}>
            <div className={styles.title}>Fill the survey:</div>
            <div className={styles.border1}>
              {/* <div className={styles.surveyCouInc}> */}
              <Box sx={{ maxWidth: 320, minWidth: 320 }}>
                <FormControl fullWidth>
                  <InputLabel
                    id='demo-simple-select-label'
                    sx={{ fontSize: 17 }}>
                    Course Name / Code
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={props.courses.courses._id}
                    defaultValue=''
                    label='Course'
                    onChange={(event) => {
                      setGetCourse(event.target.value);
                    }}>
                    {fillcourses}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ maxWidth: 320, minWidth: 320 }}>
                <FormControl fullWidth>
                  <InputLabel
                    id='demo-simple-select-label'
                    sx={{ fontSize: 17 }}>
                    Instructor
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={props.instructors.instructors._id}
                    defaultValue=''
                    label='Instructor'
                    onChange={(event) => {
                      setGetins(event.target.value);
                    }}>
                    {fillInstructors}
                  </Select>
                </FormControl>
              </Box>
              {/* </div> */}
            </div>

            <div className={styles.border}>
              <div className={styles.surveyQ}>
                <label>Rate your professor</label>
                <div className={styles.second}>
                  <StyledRating
                    // onClick={getV}
                    name='highlight-selected-only'
                    defaultValue={3}
                    value={ratePro}
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    className={styles.ratting}
                    onChange={(event) => {
                      setRatePro(parseInt(event.target.value));
                      console.log(event.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.surveyQ}>
                <label>How difficult is the professor</label>
                <div className={styles.second}>
                  <StyledRating
                    // onClick={getV}
                    name='highlight-selected-only'
                    defaultValue={3}
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    className={styles.ratting}
                    value={diffPro}
                    onChange={(event) => {
                      setDiff(parseInt(event.target.value));
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.surveyQ}>
                <label>Would you take again with the professor</label>
                <div className={styles.second}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <RadioGroup
                      row
                      aria-labelledby='segmented-controls-example'
                      name='takeAgain'
                      value={takeAgain ? takeAgain : null}
                      onChange={(event) => {
                        setTakeAgain(event.target.value);
                        console.log(event.target.value);
                      }}
                      sx={{
                        marginTop: 3,
                        fontSize: 16,
                        minHeight: 48,
                        padding: "4px",
                        borderRadius: "md",
                        bgcolor: "#d3d3d3",
                        "--RadioGroup-gap": "4px",
                        "--Radio-action-radius": "8px",
                        color: "white",
                      }}>
                      {["Yes", "No"].map((item) => (
                        <Radio
                          key={item}
                          color='white'
                          value={item}
                          disableIcon
                          label={item}
                          variant='plain'
                          sx={{
                            px: 2,
                            alignItems: "center",
                            fontSize: 16,
                          }}
                          slotProps={{
                            action: ({ checked }) => ({
                              sx: {
                                ...(checked && {
                                  bgcolor: "#959695",
                                  boxShadow: "md",
                                  "&:hover": {
                                    bgcolor: "#959695",
                                  },
                                }),
                              },
                            }),
                          }}
                        />
                      ))}
                    </RadioGroup>
                  </Box>
                </div>
              </div>
            </div>
            {/* <div className={styles.border}>
              <div className={styles.surveyQ}>
                <label>Rate your professor</label>
                <div className={styles.second}>
                  <StyledRating
                    // onClick={getV}
                    name='highlight-selected-only'
                    defaultValue={3}
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    // sx={{
                    //   disply: flex,
                    //   alignItems: center,
                    //   justifyContent: center,
                    // }}
                    className={styles.ratting}
                  />
                </div>
              </div>
            </div> */}
            <div className={styles.border}>
              <div className={styles.surveyQ}>
                <label>How difficult is the course</label>
                <div className={styles.second}>
                  <StyledRating
                    // onClick={getV}
                    name='highlight-selected-only'
                    defaultValue={3}
                    value={courseDiff}
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    className={styles.ratting}
                    onChange={(event) => {
                      setCourseDiff(parseInt(event.target.value));
                    }}
                  />
                </div>
              </div>
            </div>

            <div className={styles.borderComment}>
              <div className={styles.gU}>
                <Box sx={{ maxWidth: 320, minWidth: 320 }}>
                  <FormControl fullWidth>
                    <InputLabel
                      id='demo-simple-select-label'
                      sx={{ fontSize: 17 }}>
                      Grade
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={grade ? grade : 4}
                      label='Grade'
                      onChange={(event) => {
                        setGrade(event.target.value);
                      }}>
                      <MenuItem value={4}>A+</MenuItem>
                      <MenuItem value={3.7}>A</MenuItem>
                      <MenuItem value={3.3}>B+</MenuItem>
                      <MenuItem value={3}>B</MenuItem>
                      <MenuItem value={2.3}>C+</MenuItem>
                      <MenuItem value={2}>C</MenuItem>
                      <MenuItem value={1.3}>D</MenuItem>
                      <MenuItem value={1}>D</MenuItem>
                      <MenuItem value={0}>F</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <div className={styles.surveyQComment}>
                  <label>Do you want to hide your Name?</label>
                  <div className={styles.commentRadio}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <RadioGroup
                        row
                        aria-labelledby='segmented-controls-example'
                        name='hide'
                        value={hide ? hide : null}
                        onChange={(event) => setHide(event.target.value)}
                        sx={{
                          marginTop: 3,
                          fontSize: 16,
                          minHeight: 48,
                          padding: "4px",
                          borderRadius: "md",
                          bgcolor: "#d3d3d3",
                          "--RadioGroup-gap": "4px",
                          "--Radio-action-radius": "8px",
                          color: "white",
                        }}>
                        {["Yes", "No"].map((item) => (
                          <Radio
                            key={item}
                            color='white'
                            value={item}
                            disableIcon
                            label={item}
                            variant='plain'
                            sx={{
                              px: 2,
                              alignItems: "center",
                              fontSize: 16,
                            }}
                            slotProps={{
                              action: ({ checked }) => ({
                                sx: {
                                  ...(checked && {
                                    bgcolor: "#959695",
                                    boxShadow: "md",
                                    "&:hover": {
                                      bgcolor: "#959695",
                                    },
                                  }),
                                },
                              }),
                            }}
                          />
                        ))}
                      </RadioGroup>
                    </Box>
                  </div>
                </div>
              </div>
              <div className={styles.surveyComment}>
                <label className={styles.surveyCommentTitle}>
                  Add A comment
                </label>
                <Textarea
                  onChange={handleComment}
                  minRows={10}
                  placeholder='Write your commment'
                  // style='width: 80%;'
                  sx={{ width: "100%" }}
                />
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.surveyBtn}>
                <button onClick={handleSubmit} className={styles.btn}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
