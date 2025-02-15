import React from "react";

export default class Line extends React.Component {
	constructor() {
		super();
	}
	startData() {
		let d = [`M ${this.props.path[0].x} ${this.props.path[0].y}`];

		let collector = this.props.path.map((point) => {
			let xNext = point.x;
			let yNext = point.y;
			return `L ${xNext} ${yNext}`;
		});

		return d.concat(collector).join(" ");
	}

	render() {
		let d = this.startData();
		return (
			<path
				d={d}
				stroke={this.props.color}
				strokeWidth={this.props.width}
				fill="none"
			/>
		);
	}
}
