import React from 'react';

const Friend = props => {
  return (
    <div key={props.key}>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Friend;
