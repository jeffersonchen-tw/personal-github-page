import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"
import LoadingBar from './LoadingBar'
import './main.css'
import personalImage from '../../img/me.JPG'

const LoadingScreen = () => {

	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setRedirect(true);
		}, 2200)

		return () => {
			clearTimeout(timer);
		}
	});

	if (redirect) {
		return (
			<Redirect to="/menu" />
			)
	} else {
		return (
			<div className="Loadingmenu">
				<div className="mid-panel">
					<img src={personalImage} alt="me" className="personal-image"/>
					<div className="words-block">
					<p className="tiny-tile">Jefferson<sup>&reg;</sup></p>
					<span className="main-title">I-Li, Chen</span>
						<LoadingBar />
					</div>
				</div>
			</div>
			)
	}
}

export default LoadingScreen;