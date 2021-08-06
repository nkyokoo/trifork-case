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
        <Router>
        <div className="App">
            <header className="App-header">
                <SiteAppBar/>
            </header>
            <Container maxWidth="sm">

                    <Switch>
                        <Route exact path="/Posts">
                            <Posts />
                        </Route>
                        <Route exact path="/Albums">
                            <Albums />
                        </Route>
                    </Switch>
            </Container>
        </div>
        </Router>

    );
}

export default App;
