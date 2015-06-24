var HelloName = React.createClass({
  render: function() {
    var name = 'You';

    return (
      <div>
        Hello <span>{name}</span>
      </div>
    );
  }
});

React.render(<HelloName />, document.body);
