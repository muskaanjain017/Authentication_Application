import React,{useEffect, useState} from 'react';
// import hand from '';

export default function Login({setUser}) {

      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      useEffect(()=>{
        localStorage.clear();
      },[])
    
      const handleLogin = () => {
        fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username:username,
            password:password }),
        })
        .then(res => res.json())
        .then(data => {
          if (data) {
            // Save user object including token and id in local storage
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
          } else {
            setError(data.message);
          }
        })
        .catch(error => {
          setError('An error occurred. Please try again.');
        });
      };
     
  return (
    <div class="main">
        <div class="container">
        <header>
        <span>Welcome back!&nbsp;<img src={require("./hand.png")} height={16}/></span>
        </header>  
        <span class="signIn-header">Sign in to your account</span>
            <form>
                <div><label for="email">Your email</label></div>
                <div><input type="email" id="email" className="email" onChange={(e)=>setUsername(e.target.value)}/></div>
                <div><label for="password">Password</label></div>
                <div><input type="password" id="password" className="password" onChange={(e)=>setPassword(e.target.value)}/></div>               
            </form>    
        <div>
            <button class="continue" type="submit" onClick={handleLogin}>CONTINUE</button>
        </div>
        <section>
            <a href="#">Forget your password?</a>
        </section>
        <div>
        </div>
        <section>
                <h5 class="signUp">Don't have any account? <span type="submit">Sign up</span></h5>
            </section>
        </div>
    </div>
  )
}