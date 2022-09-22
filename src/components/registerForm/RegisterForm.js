import { S } from './RegisterForm.styled'
import { TextField } from '@mui/material'
const RegisterForm = ({
  themeColor,
  errors,
  touched,
  handleBlur,
  handleChange,
  values,
  palette,
  exsist,
}) => {
  const TextFieldStyle = { marginTop: '30px ', width: '100%' }

  return (
    <>
      <TextField
        color={themeColor}
        error={errors.name && touched.name ? true : false}
        id="name"
        label="Imię"
        onBlur={handleBlur}
        onChange={handleChange}
        sx={TextFieldStyle}
        type="text"
        values={values.name}
      />
      {touched.name && errors.name !== '' && (
        <S.ValidationErrorMessage color={palette[themeColor].error}>
          {errors.name}
        </S.ValidationErrorMessage>
      )}
      <TextField
        color={themeColor}
        error={errors.email && touched.email ? true : false}
        id="email"
        label="Email"
        onBlur={handleBlur}
        onChange={handleChange}
        sx={TextFieldStyle}
        type="text"
        value={values.email}
      />
      {touched.email && errors.email !== '' && (
        <S.ValidationErrorMessage color={palette[themeColor].error}>
          {errors.email}
        </S.ValidationErrorMessage>
      )}
      <TextField
        color={themeColor}
        error={errors.password && touched.password ? true : false}
        id="password"
        label="Hasło"
        onBlur={handleBlur}
        onChange={handleChange}
        sx={TextFieldStyle}
        type="password"
        value={values.password}
      />
      {touched.password && errors.password !== '' && (
        <S.ValidationErrorMessage color={palette[themeColor].error}>
          {errors.password}
        </S.ValidationErrorMessage>
      )}
      <TextField
        color={themeColor}
        error={errors.confirmPassword && touched.confirmPassword ? true : false}
        id="confirmPassword"
        label="Potwierdź hasło"
        onBlur={handleBlur}
        onChange={handleChange}
        sx={TextFieldStyle}
        type="password"
        value={values.confirmPassword}
      />
      {touched.confirmPassword && errors.confirmPassword !== '' && (
        <S.ValidationErrorMessage color={palette[themeColor].error}>
          {errors.confirmPassword}
        </S.ValidationErrorMessage>
      )}
      {exsist && (
        <S.Error color={palette[themeColor].error}>
          Imię lub email istnieje
        </S.Error>
      )}
    </>
  )
}

export default RegisterForm
