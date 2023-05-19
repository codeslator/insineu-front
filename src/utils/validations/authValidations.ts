import * as Yup from 'yup';

export const LOGIN_INITIAL_VALUES = {
  email: '',
  password: ''
}

export const LOGIN_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email().required(),
})