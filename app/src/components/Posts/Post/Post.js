import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import useStyles from "./style";

export default function Post({ post, setId }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.image}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          onClick={() => setId(post._id)}
          style={{ color: "white" }}
          size='small'
        >
          <MoreIcon fontSize='default' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {post.tags.map(tag => `#${tag}`)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant='h5' gutterBottom>
          {post.title}
        </Typography>
        <CardActions className={classes.cardActions}>
          <Button size='small' color='primary'>
            <ThumbUpIcon fontSize='small' />
            <span> Like {post.likeCount}</span>
          </Button>
          <Button size='small' color='primary'>
            <DeleteIcon fontSize='small' />
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
