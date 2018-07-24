import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      host: {},
    };
  }

  componentWillMount() {
    $.get('/hosts', (data) => {
      this.setState({ host: data[0] });
      console.log(this.state.host.first_name);
    });
  }

  render() {
    return (
      <div>
        <span>Hosted By {this.state.host.first_name}</span>
        <span> {this.state.host.last_name}</span>
      </div>
    );
  }
}

module.exports = App;
