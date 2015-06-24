var HelloYou = React.createClass({
  render: function() {
    return (
      <div>
        Hello <span>You</span>
      </div>
    );
  }
});

React.render(<HelloYou />, document.body);
