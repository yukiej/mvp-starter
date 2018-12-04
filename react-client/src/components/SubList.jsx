import React from 'react';
import SubItem from './SubItem.jsx';

const SubList = (props) => (
  <div>
    { props.items.map(item => <SubItem key={item.name} item={item}/>)}
  </div>
)

export default SubList;