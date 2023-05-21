import React from 'react'
import axios from 'axios';
import Joi from 'joi';
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  let [loading,setLoading]=useState(false)
  const [user, setUser] = useState({
        email:"",
        password:""
  })
  let[error,setError]=useState('');
  let[errorsList,setErrorsList]=useState([]);
  let myNavigate=useNavigate();
  function goToHome()
  {
    myNavigate('/Invigilator-home')
  }
  async function submitForm(e)
  {
e.preventDefault()
setLoading(true)
    let responseValidation=validateForm()
    console.log(responseValidation);
    if(responseValidation.error)
    {
      setErrorsList(responseValidation.error.details)
    }
    else
    {
      let {data}=await axios.post('https://route-movies-api.vercel.app/signin',user)
              if(data.message=="success")
              {
                localStorage.setItem('userToken',data.token)
                goToHome()
              }
              else
              {
                setError(data.message)
              }
      console.log(data);
      
    }
        setLoading(false)
  }
  function getInputsValues(e)
  {
    let myUser={...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser)
    console.log(myUser);
  }
 function validateForm()
 {
  let schema=Joi.object({
    email:Joi.string().required().email({ tlds: { allow: false } }),
    password:Joi.string().required().pattern(new RegExp(/^[a-z][0-9]{3}$/))
  })
  return schema.validate(user,{abortEarly:false})
 }
  return (
    <>

<h1>Login using SEU account</h1>
 {error?<div className="alert alert-danger">{error}</div>:''} 
 {errorsList.map((erroor,i)=> <div className="alert alert-danger" key={i}>{erroor.message}</div>)}

<form onSubmit={submitForm}  className='w-75 mx-auto'>
  <label>Email</label>
  <input onChange={getInputsValues} type="email" name='email' className='form-control'/>
  <label>Password</label>
  <input onChange={getInputsValues} type="password" name='password' className='form-control'/>
  <button className='btn btn-primary my-3 float-end'>
    {loading? <div class="spinner-border spinner-border-sm text-white" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:'Login'}
    </button>
</form>
    </>
  )
}
