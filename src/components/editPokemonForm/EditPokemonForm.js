import { S } from './EditPokemonForm.styled'
import { TextField } from '@mui/material'

const EditPokemonForm = ({
  themeColor,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  nameDifferenceChangePokemon,
  pokemonExsist,
}) => {
  const TextFieldStyle = { marginTop: '30px ', width: '100%' }

  return (
    <div>
      <TextField
        color={themeColor}
        id="name"
        error={errors.name && touched.name ? true : false}
        label="Nazwa pokemona"
        onBlur={handleBlur}
        onChange={handleChange}
        sx={TextFieldStyle}
        type="text"
        value={values.name}
      />
      {touched.name && errors.name !== '' && (
        <S.ValidationErrorMessage>{errors.name}</S.ValidationErrorMessage>
      )}
      {nameDifferenceChangePokemon && (
        <S.ValidationErrorMessage>
          Przy zmianie atrybutow imie pokemona nie moze byc zmienione
        </S.ValidationErrorMessage>
      )}

      <TextField
        color={themeColor}
        id="height"
        error={errors.height && touched.height ? true : false}
        label="Wzrost"
        onBlur={handleBlur}
        onChange={handleChange}
        type="number"
        sx={TextFieldStyle}
        value={values.height}
      />
      {touched.height && errors.height !== '' && (
        <S.ValidationErrorMessage>{errors.height}</S.ValidationErrorMessage>
      )}
      <TextField
        color={themeColor}
        error={errors.experience && touched.experience ? true : false}
        id="experience"
        label="Doświadczenie"
        onBlur={handleBlur}
        onChange={handleChange}
        sx={TextFieldStyle}
        type="number"
        value={values.experience}
      />
      {touched.experience && errors.experience !== '' && (
        <S.ValidationErrorMessage>{errors.experience}</S.ValidationErrorMessage>
      )}
      <TextField
        color={themeColor}
        error={errors.weight && touched.weight ? true : false}
        id="weight"
        label="Waga"
        onBlur={handleBlur}
        onChange={handleChange}
        sx={TextFieldStyle}
        type="number"
        value={values.weight}
      />
      {touched.weight && errors.weight !== '' && (
        <S.ValidationErrorMessage>{errors.weight}</S.ValidationErrorMessage>
      )}
      {pokemonExsist && (
        <S.PokemonExsistWarning>
          Pokemon o danej nazwie już istnieje
        </S.PokemonExsistWarning>
      )}
    </div>
  )
}

export default EditPokemonForm
