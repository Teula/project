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

export default function survey() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [grade, setGrade] = React.useState("");

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
        body: JSON.stringify({ comment, session }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  const [again, setAgain] = React.useState("flex-start");
  const [name, setName] = React.useState("flex-start");

  // function transform(value) {
  //   return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  // }

  return (
    <div>
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
                    value={grade}
                    label='Grade'
                    onChange={handleChange}>
                    <MenuItem value='A+'>A+</MenuItem>
                    <MenuItem value='A'>A</MenuItem>
                    <MenuItem value='B+'>B+</MenuItem>
                    <MenuItem value='B'>B</MenuItem>
                    <MenuItem value='C+'>C+</MenuItem>
                    <MenuItem value='C'>C</MenuItem>
                    <MenuItem value='D+'>D</MenuItem>
                    <MenuItem value='D'>D</MenuItem>
                    <MenuItem value='F'>F</MenuItem>
                    <MenuItem value='Hidden'>Hidden</MenuItem>
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
                    value={grade}
                    label='Grade'
                    onChange={handleChange}>
                    <MenuItem value='A+'>A+</MenuItem>
                    <MenuItem value='A'>A</MenuItem>
                    <MenuItem value='B+'>B+</MenuItem>
                    <MenuItem value='B'>B</MenuItem>
                    <MenuItem value='C+'>C+</MenuItem>
                    <MenuItem value='C'>C</MenuItem>
                    <MenuItem value='D+'>D</MenuItem>
                    <MenuItem value='D'>D</MenuItem>
                    <MenuItem value='F'>F</MenuItem>
                    <MenuItem value='Hidden'>Hidden</MenuItem>
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
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    className={styles.ratting}
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
                      name='again'
                      value={again}
                      onChange={(event) => setAgain(event.target.value)}
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
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    className={styles.ratting}
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
                      value={grade}
                      label='Grade'
                      onChange={handleChange}>
                      <MenuItem value='A+'>A+</MenuItem>
                      <MenuItem value='A'>A</MenuItem>
                      <MenuItem value='B+'>B+</MenuItem>
                      <MenuItem value='B'>B</MenuItem>
                      <MenuItem value='C+'>C+</MenuItem>
                      <MenuItem value='C'>C</MenuItem>
                      <MenuItem value='D+'>D</MenuItem>
                      <MenuItem value='D'>D</MenuItem>
                      <MenuItem value='F'>F</MenuItem>
                      <MenuItem value='Hidden'>Hidden</MenuItem>
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
                        name='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
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
