import React from "react";
import ReactDOM from "react-dom";

import propTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<div className="bg-secondary d-flex justify-content-center p-3">
			<div className="col-2 text-white text-center fs-1 p-3 me-3 bg-dark rounded">
				<i className="far fa-clock"></i>
			</div>
			<div className="col-1 p-3 me-3 text-white text-center fs-1 bg-dark rounded">
				{props.digitSix}
			</div>
			<div className="col-1 p-3 me-3 text-white text-center fs-1 bg-dark rounded">
				{props.digitFive}
			</div>
			<div className="col-1 p-3 me-3 text-white text-center fs-1 bg-dark rounded">
				{props.digitFour}
			</div>
			<div className="col-1 p-3 me-3 text-white text-center fs-1 bg-dark rounded">
				{props.digitThree}
			</div>
			<div className="col-1 p-3 me-3 text-white text-center fs-1 bg-dark rounded">
				{props.digitTwo}
			</div>
			<div className="col-1 p-3 me-3 text-white text-center fs-1 bg-dark rounded">
				{props.digitOne}
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	digitSix: propTypes.number,
	digitFive: propTypes.number,
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number,
};

let count = 0;

setInterval(function () {
	const six = Math.floor(count / 100000) % 10;
	const five = Math.floor(count / 10000) % 10;
	const four = Math.floor(count / 1000) % 10;
	const three = Math.floor(count / 100) % 10;
	const two = Math.floor(count / 10) % 10;
	const one = Math.floor(count / 1) % 10;
	count++;
	ReactDOM.render(
		<SecondsCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);

export default SecondsCounter;
