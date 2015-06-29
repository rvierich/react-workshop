var HelloYou = React.createClass({displayName: "HelloYou",
  render: function() {
    return (
      React.createElement("div", null,
        "Hello ", React.createElement("span", null, "You")
      )
    );
  }
});

React.render(React.createElement(HelloYou, null), document.body);
