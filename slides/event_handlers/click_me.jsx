var ClickMe = React.createClass({
  buttonClicked: function() {
    alert('You did it!!! YOU CLICKED ME!!!');
  },

  render: function() {
    return <button onClick={this.buttonClicked}>Click Me</button>
  }
});

React.render(<ClickMe />, document.body);
