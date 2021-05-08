import { createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: purple[300],
    },
  },
});
