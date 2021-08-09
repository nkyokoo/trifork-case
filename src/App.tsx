import React, { lazy, Suspense} from 'react';
import Container from '@material-ui/core/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
const Albums = lazy(() => import("./pages/Albums"))
const Posts = lazy(() => import("./pages/Posts"))
const Home = lazy(() => import("./pages/index"))
const SiteAppBar = lazy(() => import("./components/SiteAppBar"))

function App() {
    return (
        <Router>
        <div className="App">
            <header className="App-header">
                <Suspense fallback={ <span>loading</span>}>
                    <SiteAppBar/>
                </Suspense>
            </header>
            <Container maxWidth="sm">

                    <Switch>
                        <Route exact path="/Posts">
                            <Suspense fallback={ <span>loading</span>}>
                                <Posts />
                            </Suspense>
                        </Route>
                        <Route exact path="/Albums">
                            <Suspense fallback={ <span>loading</span>}>
                                <Albums />
                            </Suspense>
                        </Route>
                        <Route exact path="/">
                            <Suspense fallback={ <span>loading</span>}>
                                <Home />
                            </Suspense>
                        </Route>
                    </Switch>
            </Container>
        </div>
        </Router>

    );
}

export default App;
