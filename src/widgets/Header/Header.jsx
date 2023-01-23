import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Box, Button, Typography } from '@mui/material'

import { ROUTES } from 'shared/consts'
import { UserModel } from 'models'

import { SignInModal, SignUpModal } from './ui'

function Header() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
                <Link to={ROUTES.HOME}>
                    <Button>Home</Button>
                </Link>
                <Link to={ROUTES.STATS}>
                    <Button>Stats</Button>
                </Link>
            </Box>
            <Typography>{UserModel.email}</Typography>
            <Typography>{UserModel.population}</Typography>
            <Box sx={{ display: 'flex', gap: '20px' }}>
                <SignInModal />
                <SignUpModal />
            </Box>
        </Box>
    )
}

export default observer(Header)
