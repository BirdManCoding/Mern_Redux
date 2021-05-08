import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import useStyles from "./styles";

import { createPost } from "../../actions/posts";

export default function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialState = {
    creator: "",
    title: "",
    content: "",
    tags: "",
    image: "",
  };

  const [formData, setFormData] = useState(initialState);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(createPost(formData));
  }

  return (
    <Paper className={classes.paper}>
      <form
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={submitHandler}
      >
        <Typography variant='h6'>Creating a Unicorn Post</Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={formData.creator}
          onChange={e => setFormData({ ...formData, creator: e.target.value })}
        />
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          multiline
          rows={4}
          value={formData.content}
          onChange={e => setFormData({ ...formData, content: e.target.value })}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={formData.tags}
          onChange={e => setFormData({ ...formData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
          />
          <Button
            className={classes.buttonSubmit}
            variant='contained'
            size='large'
            type='submit'
            color='primary'
            fullWidth
          >
            Submit
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant='contained'
            size='small'
            color='secondary'
            onClick={() => setFormData({ ...initialState })}
            fullWidth
          >
            Reset
          </Button>
        </div>
      </form>
    </Paper>
  );
}
