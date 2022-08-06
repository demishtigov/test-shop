import React from 'react';
import ListItem from './ListItem';


const Items = ({ list }) => (
  <div className='list-wrap'>
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </div>
);

export default Items;