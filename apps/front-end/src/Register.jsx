import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function Register() {
  let [loading,setLoading]=useState(false)
  const [user, setUser] = useState({
        first_name:"",
	      last_name:"",
        age:"",
        email:"",
        password:""
  })
  let[error,setError]=useState('');
  let[errorsList,setErrorsList]=useState([]);
  let myNavigate=useNavigate();
  function goToLogin()
  {
    myNavigate('/login')
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
      let {data}=await axios.post('https://route-movies-api.vercel.app/signup',user)
              if(data.message=="success")
              {
                goToLogin()
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
    first_name:Joi.string().alphanum().min(3).max(10).required(),
    last_name:Joi.string().alphanum().min(3).max(10).required(),
    age:Joi.number().min(20).max(80).required(),
    email:Joi.string().required().email({ tlds: { allow: false } }),
    password:Joi.string().required().pattern(new RegExp(/^[a-z][0-9]{3}$/))
  })
  return schema.validate(user,{abortEarly:false})
 }
  return (
    <>

<h1>Registertion form</h1>
 {error?<div className="alert alert-danger">{error}</div>:''} 
 {errorsList.map((erroor,i)=> <div className="alert alert-danger" key={i}>{erroor.message}</div>)}

<form onSubmit={submitForm}  className='w-75 mx-auto'>
  <label>First Name</label>
  <input onChange={getInputsValues} type="text" name='first_name' className='form-control'/>
  <label>Last Name</label>
  <input onChange={getInputsValues} type="text" name='last_name' className='form-control'/>
  <label>Age</label>
  <input onChange={getInputsValues} type="number" name='age' className='form-control'/>
  <label>Email</label>
  <input onChange={getInputsValues} type="email" name='email' className='form-control'/>
  <label>Password</label>
  <input onChange={getInputsValues} type="password" name='password' className='form-control'/>
  <Link to="/login">Do y have account?Login</Link>
  <button className='btn btn-primary my-3 float-end'>
    {loading? <div class="spinner-border spinner-border-sm text-white" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:'Register'}
    </button>
</form>
    </>
  )
}
