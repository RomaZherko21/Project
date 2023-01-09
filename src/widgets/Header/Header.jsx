import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

import { ROUTES } from 'shared/consts'

import { SignInModal } from './ui'

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
                <Button variant="contained" endIcon={<ExitToAppIcon />}>
                    Sign up
                </Button>
            </Box>
        </Box>
    )
}

export default Header
