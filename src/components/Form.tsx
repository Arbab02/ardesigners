"use client"

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const FormComponents = () => {
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const fullname = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const phone = useRef<HTMLInputElement | null>(null);
  const message = useRef<HTMLTextAreaElement | null>(null);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      fullname: fullname.current?.value,
      email: email.current?.value,
      phone: phone.current?.value,
      message: message.current?.value
    };
    const res = await fetch('/api/contact', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    console.log('formdata ', data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-24 px-5"
    >
      <div className="text-center mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">We would love to hear from you!</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <motion.form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 w-full md:w-1/2  border-2 border-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col gap-3">
            <label className="text-lg text-gray-300" htmlFor="fullname">Name:</label>
            <input ref={fullname} className="py-2 rounded-md border-2 border-white bg-[transparent] text-white w-full px-4" id="fullname" type="text" placeholder="Enter your full name" />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-lg text-gray-300" htmlFor="email">Email:</label>
            <input ref={email} className="py-2 rounded-md border-2 border-white bg-[transparent] text-white w-full px-4" id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-lg text-gray-300" htmlFor="phone">Phone:</label>
            <input ref={phone} className="py-2 rounded-md border-2 border-white bg-[transparent] text-white w-full px-4" id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-lg text-gray-300" htmlFor="message">Message:</label>
            <textarea ref={message} className="py-2 rounded-md border-2 border-white bg-[transparent] text-white w-full px-4 h-32 resize-none" id="message" placeholder="Enter your message"></textarea>
          </div>
          <div className="text-center">
            <button className="py-2 px-8 border-2 border-white bg-[transparent] text-white rounded hover:bg-gray-600 transition duration-300">Submit</button>
          </div>
        </motion.form>
        <div className="w-full md:w-1/2 mt-8">
          {error && error.length > 0 && error.map((item) => (
            <div key={item} className="text-lg text-red-700 mt-2 p-3 bg-red-100 rounded">{item}</div>
          ))}
          {success && <div className="text-lg text-green-700 mt-2 p-3 bg-green-100 rounded">Your message has been sent successfully!</div>}
        </div>
      </div>
    </motion.div>
  );
}

export default FormComponents;
