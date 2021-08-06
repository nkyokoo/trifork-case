import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SiteAppBar from "./components/SiteAppBar"

import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
} from "react-router-dom";
import Albums from "./pages/Albums"
import Posts from "./pages/Posts"

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        flexGrow: 1,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    control: {
        padding: 4
    },
});

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <header className="App-header">
                <SiteAppBar/>
            </header>
            <Container maxWidth="sm">
                <Router>
                <Grid container className={classes.root} spacing={4}>
                    <Grid item/>
                    <Grid item>
                        <Card className={classes.root} style={{marginTop: "1rem"}}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    View posts
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={{pathname:"/Posts"}}>Go to Posts</Link>
                            </CardActions>
                        </Card>
                        <Card className={classes.root} style={{marginTop: "1rem"}}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    View albums
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={{pathname:"/Albums"}}>Go to Albums</Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item/>
                </Grid>
                    <Switch>
                        <Route exact path="/Posts">
                            <Posts />
                        </Route>
                        <Route exact path="/Albums">
                            <Albums />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </div>
    );
}

export default App;
