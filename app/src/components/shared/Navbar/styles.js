import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    marginBottom: "50px",
  },
  heading: {
    color: "white",
  },
  image: {
    marginLeft: "15px",
  },
}));
