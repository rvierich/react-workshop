var HelloList = React.createClass({
  render: function() {
    var words = ['bob', ' and ', 'alice'];

    return (
      <div>
        Hello <span>{words}</span>
      </div>
    );
  }
});

React.render(<HelloList />, document.body);
