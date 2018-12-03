import React from 'react';
import SubItem from './SubItem.jsx';

const SubList = (props) => (
  <div>
    <h4> Suggested substitutions </h4>
    { props.items.map(item => <SubItem key={item.name} item={item}/>)}
  </div>
)

export default SubList;