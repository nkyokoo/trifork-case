import React, {useEffect, useReducer} from 'react';
import axios from 'axios'
import Grid  from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Posts = () => {
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
        async function getPosts(){
            let data : any
            data = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatcher({type:"LOAD", Payload: data.data})

        }
        getPosts()

    }, [])
    const listItems = state?.data.slice(0, 10).map((post: any) =>
        <Grid item key={post.id} style={{marginTop:"1rem"}}>
            <Card >
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {post.body}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
    return (
        <div>
            <h1>Posts</h1>
            <Grid>{listItems}</Grid>
        </div>
    );
};

export default Posts;