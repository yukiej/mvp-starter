import React from 'react';

const Finder = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <label>
        Find substitutes for: 
        <input type="text" value={props.value} onChange={props.handleChange} name="ingredient" />
      </label>
      <input type="submit" value="Submit"/>
    </form>
  </div>
)

export default Finder;