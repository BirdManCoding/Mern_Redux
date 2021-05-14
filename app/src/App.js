import { Fragment, useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Navbar from "./components/shared/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar />
      <Container max-width='lg'>
        <main>
          <Grid container justify='space-between' alignItems='stretch'>
            <Grid item xs={12} sm={7}>
              <Posts setId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setId={setCurrentId} />
            </Grid>
          </Grid>
        </main>
      </Container>
    </Fragment>
  );
}

export default App;
