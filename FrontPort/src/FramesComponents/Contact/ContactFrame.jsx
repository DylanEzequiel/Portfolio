import React from "react";
import { motion } from "framer-motion";
import useStore from "../../../zustandStore";
import HeadersTitles from "../ServiceFrame/headersTitles/HeadersTitles";

function ContactFrame() {
	const { pageColors } = useStore();
	return (
		<motion.main
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 1, ease: "easeOut" }}
			viewport={{ once: true }}
			className="m-auto py-16"
		>
			<div className="">
				<HeadersTitles type={"Chat with us"} title={"Contact Our Team"} />
			</div>

			<article
				style={{ backgroundColor: pageColors.secundario }}
				className="group relative flex md:flex-row flex-col items-center gap-6 shadow-lg hover:shadow-lg backdrop-blur-xl m-auto mt-10 p-6 rounded-lg w-full max-w-4xl duration-200"
			>
				<div className="w-full md:w-1/2">
					<form className="space-y-8 mt-4" style={{ color: pageColors.text }}>
						<div>
							<label className="block font-medium text-lg">Name</label>
							<input
								type="text"
								name="name"
								className="bg-gray-50 dark:bg-gray-800/80 mt-1 p-2 border-b-2 border-b-transparent focus:border-b-gray-500 dark:focus:border-b-gray-200 rounded-md focus:outline-none w-full"
								placeholder="John Doe"
								required
							/>
						</div>
						<div>
							<label className="block font-medium text-lg">Email</label>
							<input
								type="email"
								name="email"
								className="bg-gray-50 dark:bg-gray-800/80 mt-1 p-2 border-b-2 border-b-transparent focus:border-b-gray-500 dark:focus:border-b-gray-200 rounded-md focus:outline-none w-full"
								placeholder="johndoe@example.com"
								required
							/>
						</div>
						<div>
							<label className="block font-medium text-lg">Message</label>
							<textarea
								name="body"
								className="bg-gray-50 dark:bg-gray-800/80 mt-1 p-2 border-b-2 border-b-transparent focus:border-b-gray-500 dark:focus:border-b-gray-200 rounded-md focus:outline-none w-full"
								rows={4}
								maxLength={2500}
								placeholder="Write your message here"
								required
							></textarea>
						</div>
						<button
							style={{ backgroundColor: pageColors.principal }}
							type="submit"
							className="px-4 py-2 rounded-xl w-max font-semibold transition duration-100"
						>
							Send Message
						</button>
					</form>
				</div>
				<aside className="flex justify-center w-full md:w-1/2">
					<img
						className=""
						src="https://cdni.iconscout.com/illustration/premium/thumb/chatting-illustration-download-in-svg-png-gif-file-formats--person-doing-online-talk-communication-conversation-profession-pack-people-illustrations-4465579.png?f=webp"
						alt="Contact Illustration"
					/>
				</aside>
			</article>
		</motion.main>
	);
}

export default ContactFrame;
