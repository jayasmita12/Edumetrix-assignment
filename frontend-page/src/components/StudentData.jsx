import React,{useState} from 'react'
import { FormControl, FormLabel, Heading, Input, Button} from '@chakra-ui/react'
import "../styles/navbar.css"

export const StudentData = () => {
  const [name, setname] = useState("")
  const [place, setplace] = useState("")
  const [mobileno, setmobile] = useState("")
  const [email, setemail] = useState("")
  const [pastCourse, setPastCourse] = useState("")

  const [namealert, setnamealert] = useState(false)
  const [mobilenoalert, setMobilenoAlert] = useState(false)
  const [emailalert, setEmailalert] = useState(false)

  const handleStudentDatasubmit = async () => {
    let res = await fetch("https://edumetrix-app.herokuapp.com/api/student", {
      method: "post",
      body: JSON.stringify({
        name: name,
        place: place,
        mobileno: mobileno,
        email: email,
        pastcourse: pastCourse
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    let agentdata = await res.json()

    setnamealert(false)
    setEmailalert(false)
    setMobilenoAlert(false)

    if (!agentdata.errors) {
      alert("Successfully Register.")
      setname("")
      setplace("")
      setmobile("")
      setemail("")
      setPastCourse("")
      // setvalid(true)
    }
    else if (agentdata.errors != []) {
      agentdata.errors.filter((e) => {
        if (e.param == "name") {
          setnamealert(true)
        }
        if (e.param == "email") {
          setEmailalert(true)
        }
        if (e.param == "mobileno") {
          setMobilenoAlert(true)
        }
      })
    }
  }

  return (
    <div className='student-form'>
        <FormControl >
          <Heading style={{ marginBottom: "20px" }}>Student Data Form</Heading>
          <FormLabel>* Name</FormLabel>
          <Input type='text' placeholder='Enter name' onChange={(e) => { setname(e.target.value) }} />
          {namealert ? <h5 style={{ color: "red" }}> Name should be greater than 5 character .</h5> : null}
          <FormLabel>* Place</FormLabel>
          <Input type='text' placeholder='Enter place' onChange={(e) => { setplace(e.target.value) }} />
          <FormLabel>* Mobile Number</FormLabel>
          <Input type='number' placeholder='Enter mobileno.' onChange={(e) => { setmobile(e.target.value) }}/>
          {mobilenoalert ? <h5 style={{ color: "red" }}> Put 10 digits mobile number .</h5> : null}
          <FormLabel>* Email</FormLabel>
          <Input type='email' placeholder='Enter email' onChange={(e) => { setemail(e.target.value) }}/>
          {emailalert ? <h5 style={{ color: "red" }}> Email should be vaild .</h5> : null}
          <FormLabel>* Past Course</FormLabel>
          <Input type='text' placeholder='Enter past course' onChange={(e) => { setPastCourse(e.target.value) }}/>
          <Button style={{ marginTop: "20px" }} onClick={handleStudentDatasubmit} colorScheme='teal'>Submit</Button>
        </FormControl>

      </div>
  )
}
