var NamesList = React.createComponent({
  getInitialState: function() {
    return {names: ['alice', 'bob', 'eve']};
  },

  removeName: function(name) {
    var names = this.state.names;
    var newNames =
      names.filter(function(n) { return n !== name});

    this.setState({names: newNames});
  },

  render: function() {
    var names = this.state.names;
    var nameElems = [];

    for (var i = 0; i < names.length; i++) {
      nameElems.push(
        <NameElem name={names[i]} onClick={this.removeName} />
      );
    }

    return <div>{nameElems}</div>;
  }
});

var NameElem = React.createComponent({
  clicked: function() {
    this.props.onClick(this.props.name);
  },

  render: function() {
    return (
      <div onClick={this.clicked}>
        {this.props.name}
      </div>
    );
  }
});
