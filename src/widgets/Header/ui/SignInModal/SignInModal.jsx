import { useState } from 'react'
import { Formik } from 'formik'
import { Box, Button, Modal, TextField } from '@mui/material'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import * as Yup from 'yup'

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
                            console.log(values)
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <form
                                onSubmit={handleSubmit}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                }}
                            >
                                <TextField
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    label="Email"
                                    variant="outlined"
                                />
                                <div style={{ color: 'red' }}>
                                    {errors.email &&
                                        touched.email &&
                                        errors.email}
                                </div>
                                <TextField
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    label="Password"
                                    variant="outlined"
                                />
                                {errors.password &&
                                    touched.password &&
                                    errors.password}
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
