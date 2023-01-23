import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    LinearProgress,
    Typography,
} from '@mui/material'
import { observer } from 'mobx-react-lite'

import { HomeModel } from './model'

function Home() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://www.atatus.com/blog/content/images/size/w960/2021/08/HTTP-Request-with-Axios.jpeg"
                title="axios"
            />
            {HomeModel.loading ? (
                <LinearProgress color="secondary" />
            ) : (
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {HomeModel.action.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {HomeModel.action.activity}
                    </Typography>
                </CardContent>
            )}

            <CardActions>
                <Button size="small" onClick={() => HomeModel.getAction()}>
                    Get new action
                </Button>
            </CardActions>
        </Card>
    )
}

export default observer(Home)
