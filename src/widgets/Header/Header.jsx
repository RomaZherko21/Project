import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import { ROUTES } from 'shared/consts'

import { SignInModal, SignUpModal } from './ui'

function Header() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
                <Link to={ROUTES.HOME}>
                    <Button>Home</Button>
                </Link>
                <Link to={ROUTES.POSTS}>
                    <Button>Posts</Button>
                </Link>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
                <SignInModal />
                <SignUpModal />
            </Box>
        </Box>
    )
}

export default Header
