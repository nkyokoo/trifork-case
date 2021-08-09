import React, {useEffect, useReducer} from 'react';
import axios from 'axios'
import Grid  from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Albums = () => {
    const [state, dispatcher] = useReducer(reducer, {data:[]})

    function reducer(state: any, action: any){
        switch (action.type){
            case "LOAD":
                return {data: action.Payload}
            default:
                break;
        }
    }

    useEffect(() => {
        async function getAlbums(){
            let data : any
            data = await axios.get("https://jsonplaceholder.typicode.com/albums")
            dispatcher({type:"LOAD", Payload: data.data})
        }

        getAlbums()

    }, [])

    const listItems = state?.data.slice(0, 10).map((album: any) =>
        <Grid item key={album.id} style={{marginTop:"1rem"}}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {album.title}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
    return (
        <div>
            <h1>Albums</h1>
            <Grid>{listItems}</Grid>
        </div>
    );
};

export default Albums;