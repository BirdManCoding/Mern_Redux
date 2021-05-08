import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";

export default function Form() {
  const classes = useStyles();

  const initialState = {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  };

  const [formData, setFormData] = useState(initialState);

  function submitHandler() {}

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
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Message'
          fullWidth
          value={formData.tags}
          onChange={e => setFormData({ ...formData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, selectedFile: base64 })
            }
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
