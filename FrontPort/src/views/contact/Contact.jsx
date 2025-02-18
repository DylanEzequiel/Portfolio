import React, { useState } from 'react';
import { MdPermPhoneMsg } from "react-icons/md";
import emailJs from "@emailjs/browser"

function Contact() {
  const cache = localStorage.getItem("submitted")
  const [submitted, setSubmitted] = useState(cache || false);
  const [loading,setLoading]= useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    emailJs.sendForm("service_c5vm2fj","template_wdk0kpb",e.target,"bJkEg6245iDADgAyA")
    setTimeout(() => {
      setSubmitted(true);
      localStorage.setItem("submitted","true")
    }, 2000);

  };
  

  return (
    <article className="m-auto my-10 max-w-[48rem] h-max">
      <header>
        <h3 className="py-10 font-semibold text-white text-2xl">
          <MdPermPhoneMsg className="inline" size={30} /> Contact
        </h3>
      </header>
      <div className="flex flex-row gap-4 bg-slate-500/20 p-4 rounded-md min-h-max overflow-hidden duration-200">
        <main className="w-full">
          <div>
            <h5 className="font-semibold text-white text-lg">Get In Touch</h5>
          </div>
          {submitted ? (
            <p className="font-semibold text-green-500">Your message has been sent successfully!</p>
          ) : (
            <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
              <div>
                <label className="block font-medium text-white">Name</label>
                <input
                  type="text"
                  name="nameSender"
                  
                  className="bg-gray-800 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-white">Email</label>
                <input
                  type="email"
                  name="emailFrom"
                  className="bg-gray-800 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
                  placeholder="youremail@example.com"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-white">Message</label>
                <textarea
                  name="mensajeSender"
                  className="bg-gray-800 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
                  rows="4"
                  placeholder="write your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md w-full font-bold text-white transition"
              >
                Enviar
              </button>
            </form>
          )}
        </main>
      </div>
    </article>
  );
}

export default Contact;
