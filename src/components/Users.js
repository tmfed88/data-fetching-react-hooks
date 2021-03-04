import React from 'react';
import Image from './Image.js';

let Users = ({users, loaded}) => {
    if (!users || users.length === 0) {
        console.log(loaded);
      return <div>{loaded}</div>;
    } else {
      return users.data.map(user => {
        return( 
        <div key={user.id} className="card-container"> 
           
          <div className="user-container">
            <Image />
            <h3>{user.name}</h3>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        </div>
        );
      });
    }
  }

  export default Users