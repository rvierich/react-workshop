var ToggleButton = React.createClass({
  getInitialState: function() {
    return {on: false};
  },

  toggle: function() {
    this.setState({on: !this.state.on});
  }

  render: function() {
    var on = this.state.on;

    return (
      <div onClick={this.toggle} className={on ? 'on' : ''}>
      </div>
    );
  }
});
