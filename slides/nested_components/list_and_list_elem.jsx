var List = React.createClass({
  render: function() {
    return (
      <div>
        <ListElem num={1} />
        <ListElem num={2} />
        <ListElem num={3} />
      </div>
    );
  }
});

var ListElem = React.createClass({
  render: function() {
    return <div>Elem {this.props.num}</div>
  }
});

React.render(<List />, document.body);
