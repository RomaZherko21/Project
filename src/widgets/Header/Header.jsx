import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Avatar, Box, Button, Typography } from '@mui/material'

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
                {UserModel.isLoggedIn() ? (
                    <Link to={ROUTES.PROFILE}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
                        />
                    </Link>
                ) : (
                    <>
                        <SignInModal />
                        <SignUpModal />
                    </>
                )}
            </Box>
        </Box>
    )
}

export default observer(Header)
