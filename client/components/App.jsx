import React from 'react';
import $ from 'jquery';
// import styles from './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      host: {},
      joinMonth: '',
      joinYear: '',
    };
  }

  componentWillMount() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    $.get('/hosts', (data) => {
      this.setState({ host: data[0] });
      this.setState({joinMonth: monthNames[Number(this.state.host.joined_in_date.split('-')[1]) - 1] });
      this.setState({joinYear: this.state.host.joined_in_date.split('-')[0]});
    });
  }

  render() {
    return (
      <div>
        <span className='title'>Hosted By {this.state.host.first_name}</span>
        <div>
          <span>{this.state.host.city}, {this.state.host.state}, {this.state.host.country} · Joined in {this.state.joinMonth}, {this.state.joinYear}
          </span>
        </div>
      </div>
    );
  }
}

module.exports = App;
