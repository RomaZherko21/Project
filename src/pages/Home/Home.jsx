import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    LinearProgress,
    Typography,
} from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

const URL = 'https://www.boredapi.com/api/activity'

function Home() {
    const [action, setAction] = useState({})
    const [loading, setLoading] = useState(false)

    const getAction = () => {
        setLoading(true)

        axios.get(URL).then((res) => {
            setAction(res.data)
            setLoading(false)
        })
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://www.atatus.com/blog/content/images/size/w960/2021/08/HTTP-Request-with-Axios.jpeg"
                title="axios"
            />
            {loading ? (
                <LinearProgress color="secondary" />
            ) : (
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {action.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {action.activity}
                    </Typography>
                </CardContent>
            )}

            <CardActions>
                <Button size="small" onClick={getAction}>
                    Get new action
                </Button>
            </CardActions>
        </Card>
    )
}

export default Home
