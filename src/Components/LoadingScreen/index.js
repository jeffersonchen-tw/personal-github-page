import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import LoadingBar from './LoadingBar'
import './main.css'
import personalImage from '../../img/me.JPG'

const LoadingScreen = () => {

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

export default LoadingScreen;