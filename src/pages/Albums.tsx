import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Albums = () => {
    const [albums, setAlbums] = useState([])

    async function getAlbums(){
        let data : any
         data = await axios.get("https://jsonplaceholder.typicode.com/albums")
         console.log(data)
        setAlbums(data.data)
    }
    useEffect(() => {
        getAlbums()
    })
    const listItems = albums.slice(0, 10).map((album: any) =>
        <Grid item id={album.id} style={{marginTop:"1rem"}}>
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