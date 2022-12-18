import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import styles from "../styles/Survey.module.css";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import axios from "axios";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function getServerSideProps(context) {
  const res = await axios.get(`http://localhost:3000/api/majors`);
  return {
    props: { majors: res.data },
  };
}

export default function Profile(props) {
  const notify = () =>
    toast.success("Profile has been updated", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const [user, setUser] = useState();
  const { data: session, status } = useSession();

  const handleUpdate = async () => {
    notify();
    const data = await fetch(
      `http://localhost:3000/api/profile`,

      {
        method: "PUT",
        body: JSON.stringify({ major, year, session, uname, gpa, campus }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };
  // getUser();

  const [uname, setUname] = useState();
  const [major, setMajor] = useState();
  const [gpa, setGpa] = useState();
  const [campus, setCampus] = useState();
  const [year, setYear] = React.useState("");

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const handleMajor = (event) => {
    setMajor(event.target.value);
  };
  //
  const [name, setName] = React.useState("flex-start");
  if (status == "authenticated") console.log(session);

  if (session) {
    return (
      <div>
        <ToastContainer />
        <div className={styles.profileGrid}>
          <div className={styles.profileTitle}>[icon]Profile Settings</div>
          <div className={styles.profileRows}>
            <TextField
              value={uname}
              id='filled-basic'
              label='First Name'
              variant='filled'
              defaultValue={session.user.name}
              onChange={(e) => {
                setUname(e.target.value);
              }}
              sx={{ maxWidth: 320, minWidth: 320, fontSize: 400 }}
            />
            <TextField
              id='filled-basic'
              label='Last Name'
              variant='filled'
              sx={{ maxWidth: 320, minWidth: 320, fontSize: 40 }}
            />
          </div>
          <div className={styles.profileRows}>
            <Box sx={{ maxWidth: 320, minWidth: 320 }}>
              <FormControl fullWidth>
                <InputLabel
                  id='demo-simple-select-label'
                  // sx={{ fontSize: 17 }}
                >
                  Year
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  defaultValue={session.user.year ? session.user.year : ""}
                  value={year}
                  label='Year'
                  onChange={(e) => setYear(e.target.value)}>
                  <MenuItem value='Freshman'>Freshman</MenuItem>
                  <MenuItem value='Sophomore'>Sophomore</MenuItem>
                  <MenuItem value='Junior'>Junior</MenuItem>
                  <MenuItem value='Senior'>Senior</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ maxWidth: 320, minWidth: 320 }}>
              <FormControl fullWidth>
                <InputLabel
                  id='demo-simple-select-label'
                  // sx={{ fontSize: 17 }}
                >
                  Major
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  defaultValue={session.user.major}
                  value={major}
                  label='Major'
                  onChange={handleMajor}>
                  {props.majors.majors.map((m) => {
                    return (
                      <MenuItem key={m._id} value={m.name}>
                        {m.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div>
            <TextField
              id='filled-basic'
              label='GPA'
              onChange={(e) => {
                setGpa(e.target.value);
              }}
              defaultValue={session.user.gpa}
              variant='filled'
              sx={{ maxWidth: 320, minWidth: 320, fontSize: 20 }}
            />
          </div>
          <div className={styles.profileCampus}>
            <label className={styles.campus}>Campus:</label>
            <div className={styles.Radio}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <RadioGroup
                  row
                  aria-labelledby='segmented-controls-example'
                  name='name'
                  defaultValue={session.user.campus ? session.user.campus : ""} // user info
                  value={campus}
                  onChange={(event) => setCampus(event.target.value)}
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
                  {["Male", "Female"].map((item) => (
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
          <div>
            {/* <div className={styles.border}> */}
            <div className={styles.surveyBtnUpdate}>
              <button onClick={handleUpdate} className={styles.btnUpdate}>
                Update
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}
