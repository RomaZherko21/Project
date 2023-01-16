import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useFormikContext } from 'formik'

function FormSelect({ name, label, options = [] }) {
    const { setFieldValue, values, errors, touched } = useFormikContext()

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    {label || name}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values[name]}
                    label={label || name}
                    onChange={(e) => {
                        setFieldValue(name, e.target.value)
                    }}
                >
                    {options.map((item) => (
                        <MenuItem key={item.key} value={item.value}>
                            {item.key}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div style={{ color: 'red' }}>
                {errors[name] && touched[name] && errors[name]}
            </div>
        </>
    )
}

export default FormSelect
