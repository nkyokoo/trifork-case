import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
    NavLink,
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

 function SiteAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Post and Albums
                    </Typography>
                    <NavLink  to={{pathname:"/Posts"}}>Go to Posts</NavLink>
                    <NavLink  to={{pathname:"/Albums"}}>Go to Album</NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default SiteAppBar