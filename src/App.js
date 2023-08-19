import React  from 'react';
import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';

const App=()=> {
  const [user,setUser] = React.useState();

  return (
    <div className="App">
     {!user?<Login setUser={setUser}/>:<Profile></Profile>} 
    </div>
  );
}

export default App;