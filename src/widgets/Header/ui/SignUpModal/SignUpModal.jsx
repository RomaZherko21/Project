import { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Box, Button, Modal } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

import { FormInput, FormSelect } from 'shared/ui'
import { UserModel } from 'models'
import { emailValidation, passwordValidation } from 'shared/helpers'

const SignUpSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    email: emailValidation(),
    password: passwordValidation(),
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
                            UserModel.signUp(values)
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
