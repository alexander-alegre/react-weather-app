let React = require('react');
let {Link} = require('react-router');

let Examples = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out</p>
        <ol>
          <li>
            <Link to="/?location=Phoenix">Phoenix, AZ</Link>
          </li>
          <li>
            <Link to="/?location=London">London, UK</Link>
          </li>
        </ol>
      </div>
    )
  }
});

module.exports = Examples;