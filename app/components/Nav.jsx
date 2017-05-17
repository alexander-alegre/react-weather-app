let React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Weather App</h3>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Get Weather</IndexLink>
        <IndexLink to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold', color: 'red'}}>About</IndexLink>
        <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Examples</IndexLink>
      </div>
    )
  }
});

module.exports = Nav;