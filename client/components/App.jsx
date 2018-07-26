import React from 'react';
import $ from 'jquery';
import HostInfo from './HostInfo.jsx';
import HostDescription from './HostDescription.jsx';

import CSSModules from 'react-css-modules';
import styles from './styles.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      host: {},
      joinMonth: '',
      joinYear: '',
      numsOfReviews: 0,
      reviewWording: 'reviews',
    };

    this.verifiedOrNot = this.verifiedOrNot.bind(this);
    this.responseTimeConvertor = this.responseTimeConvertor.bind(this);
  }

  componentWillMount() {
    this.getHostInfo();
    this.getReviewInfo();
    this.reviewOrReviews();
  }

  getHostInfo() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    $.get('/hosts', (data) => {
      this.setState({ host: JSON.parse(data)[0] });
      this.setState({ joinMonth: monthNames[Number(this.state.host.joined_in_date.split('-')[1]) - 1] });
      this.setState({ joinYear: this.state.host.joined_in_date.split('-')[0] });
    });
  }

  getReviewInfo() {
    $.get('/reviews', (data) => {
      this.setState({ numsOfReviews: data });
    });
  }

  reviewOrReviews() {
    if (this.state.numsOfReviews <= 1) {
      this.setState({ reviewWording: 'review' });
    }
  }

  verifiedOrNot() {
    if (this.state.host.verified === 1) {
      return <span>Verified</span>
    }
  }

  responseTimeConvertor() {
    if (this.state.host.response_time <= 59) {
      return <span className="boldingWords">Within an hour</span>
    }
  }

  render() {
    return (
      <div>
        <span styleName='title'>Hosted By {this.state.host.first_name}</span>
        <HostInfo host={this.state.host} joinMonth={this.state.joinMonth} joinYear={this.state.joinYear} reviews={this.state.numsOfReviews} reviewWording={this.state.reviewWording} verifiedOrNot={this.verifiedOrNot}/>
        <HostDescription host={this.state.host} responseTimeConvertor={this.responseTimeConvertor}/>
      </div>
    );
  }
}

// module.exports = App;
export default CSSModules(App, styles);
