import React from 'react';
import axios from 'axios'
import Grid  from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: 275,
        },
        paper: {
            height: 140,
            width: 100,
        },
        title: {
            fontSize: 14,
        },
        control: {
            padding: theme.spacing(4),
        },
        pos: {
            marginBottom: 12,
        },
    }),
);


const Albums = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}/>
                <Grid item xs={12}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                           <Typography variant="h5" component="h2">
                               Visit posts
                           </Typography>
                        </CardContent>
                        <CardActions>
                            <NavLink  to={{pathname:"/Posts"}}>Go to Posts</NavLink>

                        </CardActions>
                    </Card>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                           <Typography variant="h5" component="h2">
                               Visit albums
                           </Typography>
                        </CardContent>
                        <CardActions>
                            <NavLink  to={{pathname:"/Albums"}}>Go to Album</NavLink>
                        </CardActions>
                    </Card>
                    <Grid item xs={12}/>

                </Grid>
            </Grid>

        </div>
    );
};

export default Albums;