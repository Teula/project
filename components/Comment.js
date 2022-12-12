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

import React from "react";
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

export default function Comment(props) {
  // const tags = props.tags.map((tag) => <Chip label={tag} color='primary' />);
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
            {/* <div className={styles.commentBox}> sadfdssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcsavdsafdsfvaadcs</div> */}
            {/* <div className={styles.commentBox}> sadfdssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcsavdsafdsfvaadcs</div> */}
            {/* <div className={styles.commentBox}> sadfdssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcsavdsafdsfvaadcs</div> */}
            {/* <div className={styles.commentBox}> sadfdssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcssadfdsavdsafdsfvaadcsavdsafdsfvaadcs</div> */}
            {/* <div className={styles.btn1}></div>
              <div className={styles.btn2}></div> */}
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
