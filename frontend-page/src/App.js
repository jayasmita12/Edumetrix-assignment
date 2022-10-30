import { useState } from "react";
import { AllRoutes } from "./components/AllRoutes";
import { Login } from "./components/Login";
import axios from "axios"


function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [check,setCheck]=useState(false)
  const [alerting,setalert]=useState(false)

  const updateloginStatus = async () => {
    
    let res=await fetch("http://localhost:7000/api/login",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    let result = await res.json()
    console.log(result)

    if(result.message == "Login Successfully !"){
      let message=result.message
      setalert(false)
      setTimeout(()=>{
        alert(message)
        setCheck(true)
      },1000)
     }
    else if(result.message=="Error:Invalid email or Password"){
      setalert(true)
    }
    
  }

  return (

    <div className="App">
      {check ? <AllRoutes /> : <Login 
        updateloginStatus={updateloginStatus}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        alerting={alerting}
        setalert={setalert} />}
    </div>
  );
}

export default App;
