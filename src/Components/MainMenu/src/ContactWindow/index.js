import emailjs from "emailjs-com";
import EmailConfig from "../../../../Utils/EmailConfig.js"
import { useRef } from "react";
import './style.css';

const ContactWindow = () => {

	const form = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const { reply_to, message } = e.target.elements;
		function sendEmail() {
			emailjs.sendForm(
				EmailConfig.serviceId,
				EmailConfig.templateId,
				form.current,
				EmailConfig.userId
			)
				.then((res) => {
					alert("Successfully send the email!");
					console.log(res.text);
				}, (err) => {
					alert("Unable to send the email");
					console.log(err.text);
				}
				);
		}
		if (reply_to.value !== "" && message.value !== "") {
			sendEmail();
		} else {
			alert("Please fill in your email and the message!");
		}
	}

	return (
		<div>
			<form ref={form} onSubmit={onSubmit}>
				<input type="text" name="from_name" placeholder="Your name" />
				<input type="text" name="reply_to" placeholder="Your email*" />
				<textarea name="message" placeholder="message*"></textarea>
				<button className="submit-btn" type="submit">Submit!</button>
			</form>
		</div>
	)
}

export default ContactWindow;