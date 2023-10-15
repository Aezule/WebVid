'use client'
import './pageconnexion.css';
import React,{ useRef } from 'react';
import { useRouter } from 'next/navigation';

const userName = useRef("");
const pass = useRef("");

const onSubmit = async ()=>{
  const result = await signIn("credentials",{
    uesrname:userName.current,
    password:pass.current,
    redirect:true,
    callbackUrl:"/"
  })
}

function LoginPage() {
  
  return (
    <main className="">
      <form id="login-form">
        
        <div className='Centrage '>
          <div className="Affichage center-container borderinscription">
          <h2>Connexion</h2>
            <input type="text" name="User" id="username" placeholder='Username' />
            <input type="password" name="Password" id="password" placeholder='Password' />
            <button onClick={onSubmit} type="submit" id='Connexion'>Connexion</button>
          </div>
        </div>
      </form>

      <div id="message"></div>
    </main>
  );
}

export default LoginPage;
