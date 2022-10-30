import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
import { useState,useEffect } from 'react'

export const Status = () => {
  const [studentdata,setStudentData] =useState([])

  const fetchData = async()=>{
    let res = await fetch("https://edumetrix-app.herokuapp.com/api/student")
    let data=await res.json() 
    setStudentData(data.student)
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <TableContainer>
  <Table size='lg' style={{width:"80%",margin:"auto",marginTop:"50px"}}>
    <Thead>
      <Tr>
        <Th>NAME</Th>
        <Th>EMAIL</Th>
        <Th>PHONE</Th>
        <Th>LOCATION</Th>
        <Th>PAST COURSE</Th>
        <Th>STATUS</Th>
      </Tr>
    </Thead>
    <Tbody>
      {studentdata.map((e)=>{
        return (

      <Tr key={e._id}>
        <Td>{e.name}</Td>
        <Td>{e.email}</Td>
        <Td >{e.mobileno}</Td>
        <Td>{e.place}</Td>
        <Td>{e.pastcourse}</Td>
        <Td>Active</Td>
      </Tr>
        )
      })}
    </Tbody>
    
  </Table>
</TableContainer>
  )
}
