import { AppBar, Typography } from "@material-ui/core";
import unicornImage from "../../../images/unicorn.png";
import useStyles from "./styles";

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position='static' color='primary'>
      <Typography className={classes.heading} variant='h2' align='center'>
        Unicorn Blog
      </Typography>
      <img
        className={classes.image}
        src={unicornImage}
        alt='uni the Unicorn'
        height='60'
      />
    </AppBar>
  );
}
