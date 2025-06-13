import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gwbof4d", "template_w3qjjzg", form.current, {
        publicKey: "vksANCmZ6WyCYSUyJ",
      })
      .then(
        () => {
          alert("Mail Sent Suuceesfully");
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div name="contact" class=" text-gray-200 py-20 px-2 md:px-8">
      <div class="flex flex-col gap-3 justify-center items-center my-3">
        <div class="text-center text-amber-600 text-4xl font-bold">
          Contact Me
        </div>
        <div class="text-center text-xl">
          Feel free to reach out to me for any queries
        </div>
        {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
        <form
          ref={form}
          onSubmit={sendEmail}
          class="flex flex-col gap-6 bg-gray-950 p-5 rounded-lg w-full md:w-2/3 lg:w-1/2"
        >
          <div class="text-amber-600 font-semibold ml-2 text-xl">Email Me</div>
          <input
            class="bg-gray-700 h-14 p-3 rounded-lg"
            type="text"
            name="name"
            placeholder="Your Name"
            required=""
          />
          <input
            class="bg-gray-700 h-14 p-3 rounded-lg"
            type="email"
            name="email"
            placeholder="Your Email"
            required=""
          />
          <textarea
            class="bg-gray-700 p-3 rounded-lg"
            name="message"
            rows="6"
            placeholder="Message"
            required=""
          ></textarea>
          <button
            class="text-gray-950 font-semibold h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
