import { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Box, Button, MenuItem, Modal } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

import { FormInput, FormSelect } from 'shared/ui'

const SignUpSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref('password')],
        'Passwords must match'
    ),
    gender: Yup.string().required('Required'),
})

function SignUpModal() {
    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    return (
        <div>
            <Button
                onClick={handleOpen}
                variant="contained"
                endIcon={<ExitToAppIcon />}
            >
                Sign up
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
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            gender: '',
                            age: '',
                        }}
                        validationSchema={SignUpSchema}
                        onSubmit={(values) => {
                            console.log(values)
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
                                <FormInput name="name" />
                                <FormInput name="email" />
                                <FormInput name="password" />
                                <FormInput
                                    name="confirmPassword"
                                    label="Confirm password"
                                />

                                <FormSelect
                                    name="gender"
                                    options={[
                                        { key: 'Man', value: 'M' },
                                        { key: 'Women', value: 'W' },
                                    ]}
                                />

                                <FormSelect
                                    name="age"
                                    options={[
                                        { key: 'Ten', value: 10 },
                                        { key: 'Twenty', value: 20 },
                                        { key: 'Thirty', value: 30 },
                                    ]}
                                />

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

export default SignUpModal
