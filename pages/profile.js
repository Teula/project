import React, { useState } from "react";
import { useSession } from "next-auth/react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import styles from "../styles/Survey.module.css";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";

export default function profile() {
  const { data: session, status } = useSession();
  const handleUpdate = async () => {
    const data = await fetch(
      `http://localhost:3000/api/profile`,

      {
        method: "PUT",
        body: JSON.stringify({ major, year, session }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };
  //
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
  if (session) {
    return (
      <div>
        <div className={styles.profileGrid}>
          <div className={styles.profileTitle}>[icon]Profile Settings</div>
          <div className={styles.profileRows}>
            <TextField
              id='filled-basic'
              label='First Name'
              variant='filled'
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
                  value={year}
                  label='Year'
                  onChange={handleChange}>
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
                  value={major}
                  label='Major'
                  onChange={handleMajor}>
                  <MenuItem value='SE'>SE</MenuItem>
                  <MenuItem value='CS'>CS</MenuItem>
                  <MenuItem value='IT'>IT</MenuItem>
                  <MenuItem value='CE'>CE</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div>
            <TextField
              id='filled-basic'
              label='GPA'
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
