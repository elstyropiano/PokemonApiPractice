import { useContext, useEffect, useState } from 'react'
import Context from '../../Context'
import { Pagination } from '@mui/material'

const BasicPagination = () => {
  const [pagesNumber, setPagesNumber] = useState(0)

  const { setPage, page, newPokemonsList, themeColor } = useContext(Context)

  const handlePagination = (e, value) => setPage(value)

  useEffect(() => {
    if (!newPokemonsList) return
    const additionalPages = Math.ceil(newPokemonsList?.length / 15)
    setPagesNumber(additionalPages + 10)
  }, [newPokemonsList])

  return (
    <Pagination
      color={themeColor}
      count={pagesNumber}
      onChange={handlePagination}
      page={page}
      size="large"
    />
  )
}

export default BasicPagination
