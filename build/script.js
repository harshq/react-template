'use strict';

var Component = React.createClass({
	displayName: 'Component',

	render: function render() {
		return React.createElement('div', null);
	}
});

React.render(React.createElement(Component, null), document.getElementById('content'));