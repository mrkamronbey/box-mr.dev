import React, {useEffect} from 'react'
import VacancyComponent from '../../components/vacancy'

const Vacancy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <VacancyComponent/>
    </>
  )
}

export default Vacancy