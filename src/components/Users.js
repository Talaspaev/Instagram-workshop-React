import React from 'react';
import User from './User';

import photo from './photo.jpg';

export default function Users() {
  return (
    <div className="right">
      <User
        src={photo}
        alt="man"
        name="Dan"
      />
      <div className="users__block">

        <User
          src={photo}
          alt="man"
          name="Dan"
          min
        />
        <User
          src={photo}
          alt="man"
          name="Dan"
          min
        />
        <User
          src={photo}
          alt="man"
          name="Dan"
          min
        />
      </div>
    </div>
  );
}
