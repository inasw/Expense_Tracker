import React from 'react';

const Card = (props) => {
  const classes = 'card ' + props.className;

//   return <div className={classes}>{props.children}</div>;
  return <div className='border rounded-[12px] shadow-lg'>{props.children}</div>;
};

export default Card;