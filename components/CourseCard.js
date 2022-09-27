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
  const { course } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        {/* <CardMedia
          component='img'
          height='140'
          image=''
          alt='green iguana'
        /> */}
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            <Grid container spacing={0.5}>
              <Grid item xs={10}>
                {course.name}
              </Grid>
              <Grid item xs={2}>
                <Chip
                  label={course.code}
                  variant='outlined'
                  color='secondary'
                  size='small'
                />
              </Grid>
            </Grid>
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            <Grid container spacing={2}>
              {course.majors.map((m) => (
                <Grid item xs={3}>
                  <Tooltip title={m.name}>
                    <Chip
                      label={m.tag}
                      color='info'
                      size='small'
                      icon={<SchoolIcon />}
                    />
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </Typography>
          <br />
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions> */}
        {course.prerequisites[0] && (
          <CardActions disableSpacing>
            {/* <IconButton aria-label='add to favorites'> */}
            {/* <FavoriteIcon /> */}
            Prerequisites
            {/* </IconButton> */}
            <IconButton aria-label='share'>{/* <ShareIcon /> */}</IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'>
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        )}
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography>
              {course.prerequisites.map((p) => (
                <Grid container spacing={0.5}>
                  <Grid item xs={8}>
                    {p.name}
                  </Grid>
                  <Grid item xs={2}>
                    <Chip
                      label={p.code}
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
