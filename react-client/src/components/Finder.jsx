import React from 'react';

const Finder = (props) => (
  <div>
    <form>
      <label>
        Find substitutes for:
        <input type="text" name="ingredient" />
      </label>
      <input type="submit" value="Submit"/>
    </form>
  </div>
)

export default Finder;