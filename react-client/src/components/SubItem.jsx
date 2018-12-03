import React from 'react';

const SubItem = (props) => (
  <div>
    {props.item.amount + ' ' + props.item.unit + ' ' +  props.item.name}
  </div>
)

export default SubItem;