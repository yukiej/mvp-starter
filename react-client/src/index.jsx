import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import SubList from './components/SubList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      step: 0,
      items: []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    if (step === 0) {
      return (
      <div>
        <Finder/>
      </div>)
    }
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));