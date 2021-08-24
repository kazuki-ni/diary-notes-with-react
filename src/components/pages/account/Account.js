import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { signUp, logIn } from 'src/actions/userActions';

import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';

import { changeBg } from './accountFunctions';
import "./account.scss"
import { validateFormData } from './validations';

export default function Account() {
	const [signup_login, setSignup_login] = useState("signup")
	useEffect(changeBg, []);

	//* Dispatch
	const dispatch = useDispatch();

	const sendForm = event => {
		event.preventDefault();
		const formDict = validateFormData(signup_login);
		if ( formDict ) {
			console.log("Valid");
			let { id, name, email, pwd } = formDict;
			switch (signup_login) {
				case "signup":
					const isAdmin = true;
					console.log(id, name, email, pwd);
					dispatch(signUp(id, name, email, pwd, isAdmin));
					break;
				case "login":
					console.log(id, email, pwd);
					dispatch(logIn(id, email, pwd));
					break;
				default: ;
			}
		} else {
			console.log("Not valid");
		}
	}


	return (

		<div id="account-root">

			<div id="sign-img"></div>

			<form name="sign_form" className="sign-form">

				{signup_login==="signup" && <SignUpForm />}
				{signup_login==="login" && <LogInForm />}

				{signup_login==="signup" && (
					<div>
						<button
							type="submit"
							className="btn primary"
							onClick={sendForm}
						>
							Sign Up
						</button>
						<button
							className="btn secondary"
							onClick={()=>setSignup_login("login")}
						>
							Log In
						</button>
					</div>
				)}
				{signup_login==="login" && (
					<div>
						<button
							className="btn secondary"
							onClick={()=>setSignup_login("signup")}
						>
							Sign Up
						</button>
						<button
							type="submit"
							className="btn primary"
							onClick={sendForm}
						>
							Log In
						</button>
					</div>
				)}

			</form>

		</div>

	);
}