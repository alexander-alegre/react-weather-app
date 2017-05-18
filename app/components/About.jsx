let React = require('react');

/*let About = React.createClass({
  render: function () {
    return (
      <div>
        <h3>about</h3>
      </div>
    )
  }
});*/

let About = (props) => {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather application built on react. I have built this for The Complete React Developer Course</p>
        <p>Here are some of the tools i used</p>
        <ul>
          <li><a href="https://facebook..github.io/react">React</a> - JavaScript framework used.</li>
          <li><a href="http://openweathermao.org">Open Weather Map</a> - I used this to get the weather data.</li>
        </ul>
      </div>
    )
}

module.exports = About;