import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate();

    const[user, setUser]=useState({         // making array/const/ object for storing value.

        name:"",
        username:"",
        email:""

    })

    const{name,username,email}=user ;      // user values

    const onInputChange=(e)=>{                                         // it is a function for event."e" is event/ function name.
        setUser({...user,[e.target.name]:e.target.value});     //spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
    } ;        
    
    const onSubmit= async(e)=>{                             // sending data to back end using axios
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/")

    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Register User</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                    Name:
                    </label>
                    <input type={'text'} id='name' className='form-control' placeholder='Enter your name' name='name' value={name} onChange={(e)=>onInputChange(e)} />
                </div>

                <div className='mb-3'>
                    <label htmlFor='UserName' className='form-label'>
                    UserName:
                    </label>
                    <input type={'text'} id='username' className='form-control' placeholder='Enter your Username' name='username'  value={username} onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                    Email:
                    </label>
                    <input type={'email'} id='email' className='form-control' placeholder='Enter your email' name='email' value={email} onChange={(e)=>onInputChange(e)} />
                </div>

                <button type='submit' className='btn btn-outline-primary'> submit</button>
                <Link  className='btn btn-outline-danger mx-2' to={"/"}> Cancel</Link>

                </form>

            </div>
        </div>
      
    </div>
  )
}
