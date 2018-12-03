import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import SubList from './components/SubList.jsx';
// import Finder from './components/Finder.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      step: 0,
      value: '',
      items: [] 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // console.log('Searched for substitutes for ', this.state.value);
    fetch(`/api/ingredients/${this.state.value}`)
      .then((res) => res.json())
        //do something with response
      .then((jsonData) => {
        let subs = jsonData.subs;
        this.setState({
          step: 1,
          items: subs
        });
      })
    
    event.preventDefault();
  }

  render () {
    if (this.state.step === 0) {
      return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Find substitutes for: 
            <input type="text" value={this.value} onChange={this.handleChange} name="ingredient" />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>)
    } else if (this.state.step === 1) {
      return (
        <div>
        <SubList items={this.state.items}/>
      </div>)
    }
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));