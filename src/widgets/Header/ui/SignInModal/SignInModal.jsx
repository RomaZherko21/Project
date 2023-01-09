import { useState } from 'react'
import { Box, Button, Modal, TextField } from '@mui/material'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'

function SignInModal() {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    function onSubmit() {
        if (email.length > 3 && password.length > 3) {
            console.log(email, password)
        } else {
            console.log('error')
        }
    }

    return (
        <div>
            <Button
                onClick={handleOpen}
                variant="outlined"
                endIcon={<AssignmentIndIcon />}
            >
                Sign in
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        minWidth: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        borderRadius: 6,
                        p: 4,
                    }}
                >
                    <TextField
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        id="email"
                        label="Email"
                        variant="outlined"
                    />
                    <TextField
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        id="password"
                        label="Password"
                        variant="outlined"
                    />
                    <Button
                        onClick={onSubmit}
                        variant="contained"
                        disabled={false}
                    >
                        Sign in
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}

export default SignInModal
