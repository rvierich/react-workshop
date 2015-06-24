var HelloName = React.createClass({displayName: "HelloName",
  render: function() {
    var name = 'You';

    return (
      React.createElement("div", null,
        "Hello ", React.createElement("span", null, name)
      )
    );
  }
});

React.render(React.createElement(HelloName, null), document.body);
