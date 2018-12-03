import React from 'react';
import SubItem from './SubItem.jsx';

const List = (props) => (
  <div>
    <h4> Suggested substitutions </h4>
    { props.items.map(item => <SubItem item={item}/>)}
  </div>
)

export default List;