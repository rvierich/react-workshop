var ListElem = React.createClass({
  render: function() {
    return <div>Elem {this.props.num}</div>
  }
});

var List = React.createClass({
  render: function() {
    return (
      <div>
        {
          [1,2,3].map(function(i) {
            return <ListElem num={i} />;
          })
        }
      </div>
    );
  }
});



React.render(<List />, document.body);
