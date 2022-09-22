import { Button, TextField, useTheme } from '@mui/material'
import { useState, useContext } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import validationSchemas from '../../schemas/validationSchemas'
import Context from '../../Context'
import { S } from './Register.styled'
import BackHomeButton from '../../components/backHomeButton/BackHomeButton'
import RegisterForm from '../../components/registerForm/RegisterForm'

const Register = () => {
  const [exsist, setExsist] = useState(false)
  const { palette } = useTheme()
  const navigate = useNavigate()
  const { setLoggedUser, usersList, setUsersList, themeColor } =
    useContext(Context)

  const onSubmit = async (values, actions) => {
    const isThere = usersList?.some(({ name, email }) =>
      name === values.name || email === values.email ? true : false
    )
    if (isThere) {
      usersList?.map(({ name, email }) => {
        if (name === values.name || email === values.email) setExsist(true)
      })
    } else {
      await new Promise(resolve => {
        setTimeout(resolve, 1000)
      })
      const newUsersList = [...usersList, values]

      const dataToLocalStorage = {
        name: values.name,
        email: values.email,
        password: values.password,
      }
      window.localStorage.setItem('logged', JSON.stringify(dataToLocalStorage))
      actions.resetForm()
      setExsist(false)
      setLoggedUser(dataToLocalStorage)
      setUsersList(newUsersList)
      navigate('/')

      const data = {
        name: values.name,
        email: values.email,
        password: values.password,
      }
      postDataOnServer(data)
    }
  }

  const postDataOnServer = async data =>
    await axios.post(`http://localhost:3000/users`, { ...data })

  const {
    values,
    errors,
    touched,
    handleChange,
    isSubmitting,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: { name: '', email: '', password: '', confirmPassword: '' },
    validationSchema: validationSchemas,
    onSubmit,
  })

  return (
    <S.MainWrapper>
      <form onSubmit={handleSubmit} autoComplete="off">
        <S.FormWrapper themeColor={themeColor}>
          <S.H1
            color={
              palette[themeColor] === 'dark'
                ? palette?.loginButtonDark.main
                : palette?.loginButtonColor.main
            }
          >
            Rejestracja
          </S.H1>
          <RegisterForm
            themeColor={themeColor}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values}
            palette={palette}
            exsist={exsist}
          />
          <Button
            color={
              themeColor === 'dark' ? 'loginButtonDark' : 'loginButtonColor'
            }
            sx={{ marginTop: '30px ', height: '55px', width: '100%' }}
            disabled={isSubmitting}
            type="submit"
            variant="contained"
          >
            Zarejestruj się
          </Button>
        </S.FormWrapper>
      </form>
      <BackHomeButton />
    </S.MainWrapper>
  )
}

export default Register
