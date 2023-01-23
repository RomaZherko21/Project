import { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Box, Button, Modal } from '@mui/material'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'

import { FormInput } from 'shared/ui'
import { UserModel } from 'models'

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
})

function SignInModal() {
    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    console.log(UserModel)

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
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={SignInSchema}
                        onSubmit={(values) => {
                            UserModel.signIn(values)
                        }}
                    >
                        {({ handleSubmit }) => (
                            <form
                                onSubmit={handleSubmit}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                }}
                            >
                                <FormInput name="email" />
                                <FormInput name="password" />
                                <Button type="submit" variant="contained">
                                    Submit
                                </Button>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </div>
    )
}

export default SignInModal
