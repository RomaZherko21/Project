import { useState } from 'react'
import { Box, Button, Modal, TextField } from '@mui/material'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'

function SignInModal() {
    const [open, setOpen] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [emailErrorMessage, setEmailErrorMessage] = useState('')

    const [passwordErr, setPasswordErr] = useState(false)
    const [confirmPasswordErr, setConfirmPasswordErr] = useState(false)

    function handleOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    function emailValidation() {
        if (email.length < 3) {
            setEmailErrorMessage('Email less than 3!!!')
            return true
        } else if (email.length > 10) {
            setEmailErrorMessage('Email more than 10!!!')
            return true
        } else {
            setEmailErrorMessage('')
            return false
        }
    }

    function passwordValidation() {
        if (password.length < 6) {
            setPasswordErr(true)
            return true
        } else {
            setPasswordErr(false)
            return false
        }
    }

    function confirmPasswordValidation() {
        if (password === confirmPassword) {
            setConfirmPasswordErr(false)
            return false
        } else {
            setConfirmPasswordErr(true)
            return true
        }
    }

    function onSubmit() {
        let emailE = emailValidation()
        let passwordE = passwordValidation()
        let confirmPasswordE = confirmPasswordValidation()

        if (!emailE && !passwordE && !confirmPasswordE) {
            console.log('HEHEHEHE', email, password, confirmPassword)
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
                    {emailErrorMessage ? (
                        <div>Error: {emailErrorMessage}</div>
                    ) : null}

                    <TextField
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        id="password"
                        label="Password"
                        variant="outlined"
                    />
                    {passwordErr ? <div>Error: password</div> : null}

                    <TextField
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }}
                        id="confirmPassword"
                        label="Confirm password"
                        variant="outlined"
                    />
                    {confirmPasswordErr ? (
                        <div>Error: confirm password</div>
                    ) : null}

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
