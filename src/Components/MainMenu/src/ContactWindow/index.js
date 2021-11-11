import emailjs from "emailjs-com";
import EmailConfig from "../../../../Utils/EmailConfig.js"
import { useRef } from "react";
import './style.css';

const ContactWindow = () => {

	const form = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			EmailConfig.serviceId,
			EmailConfig.templateId,
			form.current,
			EmailConfig.userId
		)
		.then(
			alert("Successfully send the email!")
		)
		.catch((err) => {
			console.log("Failed", err);
		});
	}
	return (
		<div>
			<form ref={form} onSubmit={onSubmit}>
				<input type="text" name="from_name" placeholder="Your name" />
				<input type="text" name="reply_to" placeholder="Your email*" />
				<textarea name="message"></textarea>
				<button type="submit">Submit!</button>
			</form>
		</div>
	)
}

export default ContactWindow;