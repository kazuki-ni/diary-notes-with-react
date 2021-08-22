import React, { useState, useEffect } from 'react';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

import { changeBg } from './accountFunctions';
import "./account.scss"

export default function Account() {
	const [whichSign, setWhichSign] = useState("signup")
	useEffect(changeBg, [])

	return (

		<div id="account-root">

			<div id="sign-img"></div>

			<form className="sign-form">

				{whichSign==="signup" && <SignUpForm />}
				{whichSign==="signin" && <SignInForm />}

				{whichSign==="signup" && (
					<div>
						<button
							type="submit"
							className="btn primary"
						>
							Sign Up
						</button>
						<button
							className="btn secondary"
							onClick={()=>setWhichSign("signin")}
						>
							Sign In
						</button>
					</div>
				)}
				{whichSign==="signin" && (
					<div>
						<button
							className="btn secondary"
							onClick={()=>setWhichSign("signup")}
						>
							Sign Up
						</button>
						<button
							type="submit"
							className="btn primary"
						>
							Sign In
						</button>
					</div>
				)}

			</form>

		</div>

	);
}