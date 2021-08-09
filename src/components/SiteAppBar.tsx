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
        backgroundColor: "red",
        boxShadow:"4px 4px 0px 1px rgba(1,1,1,0.6)",
        borderRadius:"4px",
        color:"white",
        fontFamily:"Arial",
        fontSize:"15px",
        padding:"6px 15px",
        textDecoration:"none",
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
                    <NavLink className={classes.menuButton} to={{pathname:"/"}}>Go to home</NavLink>
                    <NavLink className={classes.menuButton} to={{pathname:"/Posts"}}>Go to Posts</NavLink>
                    <NavLink className={classes.menuButton} to={{pathname:"/Albums"}}>Go to Album</NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default SiteAppBar