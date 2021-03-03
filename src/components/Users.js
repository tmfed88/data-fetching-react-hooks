import React from 'react';

let Users = ({users, loaded}) => {
    if (!users || users.length === 0) {
        console.log(loaded);
      return <div>{loaded}</div>;
    } else {
      return users.data.map(user => {
        return( 
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
        );
      });
    }
  }

  export default Users