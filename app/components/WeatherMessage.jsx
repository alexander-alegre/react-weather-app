let React = require('react');

let WeatherMessage = React.createClass({
  render: function () {
    let {temp, location} = this.props;
    return (
      <div>
        <p>It is {temp} F in {location}</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;