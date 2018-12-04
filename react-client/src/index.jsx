import React from 'react';
import ReactDOM from 'react-dom';
import SubList from './components/SubList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      step: 0,
      value: '',
      items: [
        ] 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    fetch(`http://localhost:3003/api/ingredients/${this.state.value}`, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain"
      }
    })
      .then((res) => 
        res.json())
      .then((jsonData) => {
        let subs = jsonData.subs;
        this.setState({
          step: 1,
          items: subs
        });
      })
      .catch(() => {
        this.setState({
          step: 0,
          items: []
        })
      })
    
    event.preventDefault();
  }

  render () {
    if (this.state.step === 0) {
      return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3> Find substitutes for: </h3>
            <input type="text" value={this.value} onChange={this.handleChange} name="ingredient" />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>)
    } else if (this.state.step === 1 && this.state.items.length !== 0) {
      return (
        <div>
            <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                <h3> Find substitutes for: </h3>
                <input type="text" value={this.value} onChange={this.handleChange} name="ingredient" />
              </label>
              <input type="submit" value="Submit"/>
            </form>
          </div>
          <div>
            <SubList items={this.state.items}/>
          </div>
        </div>
        )
    } 
  }
}

ReactDOM.render(<App />, document.getElementById('app'));