import { withErrorBoundary } from "components/ErrorBoundary/ErrorBoundary.jsx";
import React, { Component } from "react";

class NoMatchFound extends Component {
	state = {};
	render() {
		return <h1>404</h1>;
	}
}

export default withErrorBoundary(NoMatchFound, "NoMatchFound");
