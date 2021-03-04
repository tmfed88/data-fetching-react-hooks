import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
import Users from './components/Users.js';
import fetchData from './fetch.js';

let getUsers = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  
  const [loaded, setLoaded] = useState({isLoaded: false, Status: 'Loading...'});
  const [users, setUsers] = useState();
  
  useEffect(() => {
    setLoaded({isLoaded: false, Status: 'Loading...'})

    const timeout = () =>{
        return <div>{loaded.Status}</div>
    } 

    setTimeout(() => {
    fetchData(getUsers)
    .then(data => {
      setLoaded({...loaded, isLoaded: true, Status: 'Loaded'}); 
      setUsers({...users, data});
      })
    .catch(() => {
      setLoaded({...loaded, isLoaded: false, Status:'Failed'})
    })
  }, 3000);

  return timeout();
  }, [])
  console.log(loaded);
  return (
    <div>
      <Users users={users} loaded={loaded.Status}/>
    </div>
  );       
}

render(<App />, document.querySelector("#app"));