import React from 'react';
import Container from '@material-ui/core/Container';
import SiteAppBar from "./components/SiteAppBar"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Albums from "./pages/Albums"
import Posts from "./pages/Posts"

function App() {
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
