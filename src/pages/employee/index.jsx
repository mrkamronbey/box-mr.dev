import React, {useEffect} from 'react'
import EmployeeComponent from '../../components/employees'

const Employee = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <EmployeeComponent/>
    </>
  )
}

export default Employee