import * as Yup from 'yup'

export const emailValidation = () => {
    return Yup.string().email('Invalid email').required('Required')
}

export const passwordValidation = () => {
    return Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
}
