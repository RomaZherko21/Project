import { TextField } from '@mui/material'
import { useFormikContext } from 'formik'

function FormInput({ name, label }) {
    const { handleChange, handleBlur, values, errors, touched } =
        useFormikContext()

    return (
        <>
            <TextField
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[name]}
                label={label || name}
                variant="outlined"
            />
            <div style={{ color: 'red' }}>
                {errors[name] && touched[name] && errors[name]}
            </div>
        </>
    )
}

export default FormInput
