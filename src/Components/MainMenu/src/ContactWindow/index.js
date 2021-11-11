import emailjs from "emailjs-com";
import EmailConfig  from "../../../../Utils/EmailConfig.js"
import { useState } from "react";
import './style.css';

// TODO: - https://www.emailjs.com/docs/examples/reactjs/
// TODO: - https://medium.com/geekculture/how-to-send-emails-from-a-form-in-react-emailjs-6cdd21bb4190
const ContactWindow = () => {

	const [sendTo, setSendTo] = useState({
		name: '',
		reply_to: '',
		message: ''
	})

	const handleChange = (e) => {
		setSendTo({...sendTo, [e.target.name]: e.target.value});
	}

	const sendEmail = (e) => {
		e.preventDefault();
	}
	return (
		<div>
			<form>
				<input type="text" name="name" placeholder="Your name"/>
				<input type="text" name="reply_to" placeholder="Your email*"/>
				<textarea name="message"></textarea>
				<button type="submit">Submit!</button>
			</form>
		</div>
	)
}

export default ContactWindow;