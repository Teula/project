import React from "react";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Comment(props) {
  const tags = props.tags.map((tag) => <Chip label={tag} color='primary' />);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>
            <Avatar alt='Remy Sharp' src={props.pic} /> <br />
            {tags}
          </div>
        </Grid>
        <Grid item xs={6}>
          <p>Grade:</p>
          <p>Online:</p>
        </Grid>
        <Grid item xs={12}>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Grid>
        <Grid item xs={4}>
          <IconButton aria-label='delete'>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Divider />
    </div>
  );
}
