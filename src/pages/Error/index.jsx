import React, {useEffect} from 'react'
import { Error } from '../../components/error'

const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Error/>
    </>
  )
}

export default ErrorPage