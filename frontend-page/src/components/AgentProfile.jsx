import React, { useState } from 'react'
import "../styles/navbar.css"
import { FormControl, FormLabel, Heading, Input, Button, AlertDescription, Alert, AlertTitle, AlertIcon } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

export const AgentProfile = () => {
  const [image,setImage]=useState("https://cdn-icons-png.flaticon.com/512/3135/3135715.png")
  const [name, setname] = useState("")
  const [place, setplace] = useState("")
  const [mobileno, setmobile] = useState("")
  const [email, setemail] = useState("")
  const [bank, setbank] = useState("")
  const [valid,setvalid]=useState(false)


  const [namealert, setnamealert] = useState(false)
  const [mobilenoalert, setMobilenoAlert] = useState(false)
  const [emailalert, setEmailalert] = useState(false)

  const handleAgentsubmit = async () => {
    let res = await fetch("https://edumetrix-app.herokuapp.com/api/agent", {
      method: "post",
      body: JSON.stringify({
        name: name,
        place: place,
        mobileno: mobileno,
        email: email,
        bankdetails: bank
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
      setvalid(true)
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

  const uploadImage = (e)=>{
    if(e.target.files.length !== 0){
        setImage(URL.createObjectURL(e.target.files[0]))
    }
 }

  return (
    <div className="agent-page">
      <div className='agent-form'>
        <FormControl >
          <Heading style={{ marginBottom: "20px" }}>Agent Profile Form</Heading>
          <FormLabel>* Name</FormLabel>
          <Input type='text' placeholder='Enter name' onChange={(e) => { setname(e.target.value) }} />
          {namealert ? <h5 style={{ color: "red" }}> Name should be greater than 5 character .</h5> : null}
          <FormLabel>* Place</FormLabel>
          <Input type='text' placeholder='Enter place' onChange={(e) => { setplace(e.target.value) }} />
          <FormLabel>* Mobile Number</FormLabel>
          <Input type='number' placeholder='Enter mobileno.' onChange={(e) => { setmobile(e.target.value) }} />
          {mobilenoalert ? <h5 style={{ color: "red" }}> Put 10 digits mobile number .</h5> : null}
          <FormLabel>* Email</FormLabel>
          <Input type='email' placeholder='Enter email' onChange={(e) => { setemail(e.target.value) }} />
          {emailalert ? <h5 style={{ color: "red" }}> Email should be vaild .</h5> : null}
          <FormLabel>* Bank Account Details</FormLabel>
          <Input type='text' placeholder='Enter bank details' onChange={(e) => { setbank(e.target.value) }} />
          <Button style={{ marginTop: "20px" }} colorScheme='teal' onClick={handleAgentsubmit}>Submit</Button>
        </FormControl>

      </div>
      <div className="profile-view">
        <div className='agent-image'>
          <img src={image} alt="" />
          <Input type="file" onChange={uploadImage} className='edit-image'></Input>
        </div>

        {valid ? 
        <div className='agent-data'>
          <h1>Name={name}</h1>
          <h3>Place={place}</h3>
          <h3>Mobile No.={mobileno}</h3>
          <h3>Email Id={email}</h3>
          <h3>Bank Details={bank}</h3>
        </div>: null}

      </div>
    </div>
  )
}
