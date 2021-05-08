import { Fragment, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Navbar from "./components/shared/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar />
      <Container max-width='lg'>
        <main>
          <Grid container justify='space-between' alignItems='stretch'>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </main>
      </Container>
    </Fragment>
  );
}

export default App;
