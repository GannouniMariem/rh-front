import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {Toast} from 'primereact/toast';
import {useRef,useState} from 'react';

import logo from '../../assets/logo.png';

import { useLogin } from 'react-admin';




const Login = ({theme}) => {
  const [email ,setEmail] = useState('');
  const [pwd ,setPwd] = useState('');
  const login = useLogin();

  const handleSubmit = e => {
    e.preventDefault();
    login({ email, pwd }).catch(() =>
        toastRef.current.show({severity:'error',summary:'Error', detail:'value is required'})
    );
};

  const toastRef = useRef();


  
  return (
    
   <React.Fragment>

      <Toast ref={toastRef}/>
      <div className="login border rounded-3 shadow-sm p-5 mb-5 bg-body">
            <form onSubmit={handleSubmit}>
                  <div className="text-center mb-5">
                                    <img src={logo} alt="hyper" height={50} className="mb-3" />
                                    <div className="fw-bold mb-3">Welcome Back</div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label d-block fw-semibold">Email address</label>
                    <InputText type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    value={email} onChange={e=>setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label d-block fw-semibold">Password</label>
                    <InputText type="password" className="form-control" id="exampleInputPassword1" 
                     value={pwd} onChange={e=>setPwd(e.target.value)}/>
                  </div>
                  <Button type='submit' label="Sign In" icon="pi pi-user" className="w-full"/>

            </form>
        </div>
   </React.Fragment>
    
     
    
)}

export default Login