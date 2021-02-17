import React from "react";

export default class Rectangle extends React.Component {
	constructor() {
		super();
	}

	startData() {
		let rect = {
			x: this.props.path[0].x,
			y: this.props.path[0].y,
			width:
				this.props.path[this.props.path.length - 1].x - this.props.path[0].x,
			height:
				this.props.path[this.props.path.length - 1].y - this.props.path[0].y,
		};
		return rect;
	}

	render() {
		let rect = this.startData();
		return (
			<Rect
				x={rect.x}
				y={rect.y}
				width={rect.width}
				height={rect.height}
				stroke={this.props.color}
				strokeWidth={this.props.width}
				fill="none"
			/>
		);
	}
}
